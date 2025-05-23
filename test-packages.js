/**
 * MBTI测试套餐管理脚本
 * 处理基础和专业套餐的测试流程和支付功能
 */

document.addEventListener('DOMContentLoaded', function() {
  // 获取URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const testType = urlParams.get('type') || 'basic'; // 默认为基础测试
  
  // 根据测试类型设置问题数量
  const questionCount = testType === 'pro' ? 100 : 40;
  
  // 初始化测试配置
  initTestConfig(testType, questionCount);
  
  // 监听测试完成事件
  document.addEventListener('testCompleted', function(e) {
    if (testType === 'pro') {
      // 专业测试完成后，显示支付页面
      window.location.href = 'price.html?showPayment=true';
    } else {
      // 基础测试直接显示结果
      window.location.href = 'result.html?type=basic';
    }
  });
});

/**
 * 初始化测试配置
 * @param {string} type - 测试类型 (basic/pro)
 * @param {number} questionCount - 问题数量
 */
function initTestConfig(type, questionCount) {
  // 设置测试类型和问题数量到全局变量或本地存储
  window.testConfig = {
    type: type,
    questionCount: questionCount,
    currentQuestion: 0
  };
  
  // 存储到localStorage以便在页面间共享
  localStorage.setItem('testConfig', JSON.stringify(window.testConfig));
  
  // 更新UI显示当前测试类型
  updateTestTypeUI(type);
}

/**
 * 更新UI以显示当前测试类型
 * @param {string} type - 测试类型
 */
function updateTestTypeUI(type) {
  const testTypeElement = document.getElementById('test-type');
  if (testTypeElement) {
    if (type === 'pro') {
      testTypeElement.textContent = '专业定制测试';
      testTypeElement.classList.add('text-blue-600');
    } else {
      testTypeElement.textContent = '基础体验测试';
      testTypeElement.classList.add('text-green-500');
    }
  }
  
  // 更新进度条最大值
  const progressBar = document.getElementById('test-progress');
  if (progressBar) {
    progressBar.max = window.testConfig.questionCount;
  }
}

/**
 * 检查测试是否完成
 * @returns {boolean} 是否完成测试
 */
function isTestCompleted() {
  const config = JSON.parse(localStorage.getItem('testConfig') || '{}');
  return config.currentQuestion >= config.questionCount;
}

/**
 * 更新测试进度
 * @param {number} increment - 增加的问题数量
 */
function updateTestProgress(increment = 1) {
  const config = JSON.parse(localStorage.getItem('testConfig') || '{}');
  config.currentQuestion += increment;
  
  // 更新本地存储
  localStorage.setItem('testConfig', JSON.stringify(config));
  
  // 更新进度条
  const progressBar = document.getElementById('test-progress');
  const progressText = document.getElementById('progress-text');
  
  if (progressBar) {
    progressBar.value = config.currentQuestion;
  }
  
  if (progressText) {
    progressText.textContent = `${config.currentQuestion}/${config.questionCount}`;
  }
  
  // 检查是否完成测试
  if (config.currentQuestion >= config.questionCount) {
    // 触发测试完成事件
    document.dispatchEvent(new CustomEvent('testCompleted', {
      detail: { type: config.type }
    }));
  }
}
