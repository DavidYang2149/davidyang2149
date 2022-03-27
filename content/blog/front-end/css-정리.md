---
title: CSS 정리
date: 2021-03-03 13:03:75
category: front-end
thumbnail: { thumbnailSrc }
draft: false
---

## CSS 정리

opacity:
불투명도
0.0에서 1.0까지 조절가능
div {
background-color: green;
opacity: 0.3;
}

백그라운드:
p {
background-image: url("paper.gif");
}

max-height Sets the maximum height of an element (최대 높이)
max-width Sets the maximum width of an element (최대 넓이)
min-height Sets the minimum height of an element (최소 높이)
min-width Sets the minimum width of an element (최소 넓이)

css의 박스 모델

- 컨텐츠: width, height
- 패딩: 안쪽 여백.
- 보더: 경계선.
- 마진: 바깥쪽 여백.

[box-sizing](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)
box-sizing 시에 border-box를 추천.

box type (큰틀)
display

- block
- inline: 해당을 사용할 때는 width, height, padding-top, padding-bottom, border-top, border-bottom, margin-top, margin-bottom은 제대로 사용 불가
- inline-block: 반대로 inline-block은 width, height, padding-top, padding-bottom, border-top, border-bottom, margin-top, margin-bottom을 적용할 수 있다.
- flex:
- float:
  - float(뜨다)를 적용하면 겹침이 발생한다.
  - float을 적용하면 자동으로 display: block이 된다(그럼 width, height 적용이 가능해진다).
  -
  - float을 적용하면 margin을 자동으로 채우지 않는다.

flexbox

- 가로, 세로 정렬
- 한줄에 정렬할지
