import { jsPDF } from 'jspdf';

function generatePDF(mbtiType, results) {
  const doc = new jsPDF();
  
  // Add company logo and header
  doc.setFontSize(24);
  doc.text('智能MBTI性格测试报告', 105, 20, { align: 'center' });
  
  // Add MBTI type
  doc.setFontSize(16);
  doc.text(`您的MBTI类型：${mbtiType}`, 20, 40);
  
  // Add type description
  doc.setFontSize(12);
  doc.text(results.description, 20, 60, { maxWidth: 170 });
  
  // Add strengths
  doc.setFontSize(14);
  doc.text('优势：', 20, 100);
  let yPos = 110;
  results.strengths.forEach(strength => {
    doc.setFontSize(12);
    doc.text(`• ${strength}`, 30, yPos);
    yPos += 10;
  });
  
  // Add career recommendations
  yPos += 10;
  doc.setFontSize(14);
  doc.text('推荐职业：', 20, yPos);
  yPos += 10;
  results.careers.forEach(career => {
    doc.setFontSize(12);
    doc.text(`• ${career}`, 30, yPos);
    yPos += 10;
  });
  
  // Add footer
  doc.setFontSize(10);
  doc.text('© 2025 智能MBTI. 版权所有', 105, 280, { align: 'center' });
  
  // Save the PDF
  doc.save(`MBTI-${mbtiType}-报告.pdf`);
}

document.addEventListener('DOMContentLoaded', function() {
  const downloadButton = document.getElementById('download-pdf');
  
  if (downloadButton) {
    downloadButton.addEventListener('click', function() {
      const mbtiType = document.getElementById('mbti-type').textContent;
      const results = {
        description: document.getElementById('mbti-description').textContent,
        strengths: Array.from(document.getElementById('mbti-strengths').children).map(li => li.textContent),
        careers: Array.from(document.getElementById('mbti-careers').children).map(div => div.textContent)
      };
      
      generatePDF(mbtiType, results);
    });
  }
});