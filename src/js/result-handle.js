/**
 * MBTI测试结果处理脚本
 * 根据测试类型和支付状态显示不同的结果内容
 */

document.addEventListener('DOMContentLoaded', function() {
  // 获取URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const testType = urlParams.get('type') || 'basic'; // 默认为基础测试
  const isPaid = urlParams.get('paid') === 'true';
  
  // 根据测试类型和支付状态显示不同的结果内容
  displayTestResults(testType, isPaid);
});

/**
 * 显示测试结果
 * @param {string} type - 测试类型 (basic/pro)
 * @param {boolean} isPaid - 是否已支付（仅适用于专业测试）
 */
function displayTestResults(type, isPaid) {
  // 获取结果容器
  const basicResultContainer = document.getElementById('basic-result-container');
  const proResultContainer = document.getElementById('pro-result-container');
  const paymentRequiredContainer = document.getElementById('payment-required-container');
  
  // 隐藏所有容器
  if (basicResultContainer) basicResultContainer.classList.add('hidden');
  if (proResultContainer) proResultContainer.classList.add('hidden');
  if (paymentRequiredContainer) paymentRequiredContainer.classList.add('hidden');
  
  // 根据测试类型和支付状态显示相应的容器
  if (type === 'basic') {
    // 基础测试结果
    if (basicResultContainer) {
      basicResultContainer.classList.remove('hidden');
    }
  } else if (type === 'pro') {
    if (isPaid) {
      // 已支付的专业测试结果
      if (proResultContainer) {
        proResultContainer.classList.remove('hidden');
      }
    } else {
      // 未支付的专业测试结果，显示支付提示
      if (paymentRequiredContainer) {
        paymentRequiredContainer.classList.remove('hidden');
        
        // 设置支付按钮链接
        const paymentButton = document.getElementById('payment-button');
        if (paymentButton) {
          paymentButton.addEventListener('click', function() {
            window.location.href = 'price.html?showPayment=true';
          });
        }
      }
    }
  }
  
  // 更新结果页面标题
  updateResultTitle(type, isPaid);
}

/**
 * 更新结果页面标题
 * @param {string} type - 测试类型
 * @param {boolean} isPaid - 是否已支付
 */
function updateResultTitle(type, isPaid) {
  const titleElement = document.getElementById('result-title');
  if (!titleElement) return;
  
  if (type === 'basic') {
    titleElement.textContent = '您的MBTI基础测试结果';
    titleElement.classList.add('text-green-600');
  } else if (type === 'pro') {
    if (isPaid) {
      titleElement.textContent = '您的MBTI专业分析报告';
      titleElement.classList.add('text-blue-600');
    } else {
      titleElement.textContent = '完成支付查看专业分析报告';
      titleElement.classList.add('text-blue-600');
    }
  }
}
