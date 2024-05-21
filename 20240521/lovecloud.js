var wordcloud2 = new WordCloud(document.getElementById("wordcloud2"), {
  list: [
    { text: "爱心", weight: 8 },
    { text: "520", weight: 8 },
    { text: "", weight: 1 }, // 用空字符串填充词云中间，使其居中
  ],
  color: "rgba(255, 0, 0, 0.7)", // 红色的RGB值，半透明
  minSize: 100,
  weightFactor: 50,
  gridSize: 18,
  fontStep: 1.5,
  rotationRatio: 0.35,
  shape: "circle", // 词云形状为圆形
  ellipticity: 0.65,
  fontFamily: "impact",
  wait: 0,
});
wordcloud2.build();
