document.addEventListener('DOMContentLoaded', function() {
  const shareButtons = document.querySelectorAll('.share-button');
  
  shareButtons.forEach(button => {
    button.addEventListener('click', async function(e) {
      e.preventDefault();
      
      const type = this.dataset.type;
      const mbtiType = document.getElementById('mbti-type').textContent;
      const mbtiTitle = document.getElementById('mbti-title').textContent;
      const shareUrl = window.location.href;
      
      switch(type) {
        case 'social':
          try {
            await navigator.share({
              title: '我的MBTI测试结果',
              text: `我是${mbtiType}类型 - ${mbtiTitle}！来测测你是什么类型？`,
              url: shareUrl
            });
          } catch (err) {
            alert('分享功能可能不受支持或出现错误');
          }
          break;
          
        case 'wechat':
          // 在实际应用中需要集成微信分享SDK
          alert('微信分享功能即将上线！');
          break;
          
        case 'email':
          const subject = encodeURIComponent('我的MBTI测试结果');
          const body = encodeURIComponent(`我是${mbtiType}类型 - ${mbtiTitle}！\n\n来测测你是什么类型？\n${shareUrl}`);
          window.location.href = `mailto:?subject=${subject}&body=${body}`;
          break;
      }
    });
  });
});