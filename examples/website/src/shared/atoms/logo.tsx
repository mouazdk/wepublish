import React from 'react'
import {useStyle, cssRule} from '@karma.run/react'

export const LogoStyle = cssRule({
  display: 'block',
  height: '1em'
})

export const SmallLogoStyle = cssRule({
  transform: `translate(0.1em, -0.05em)` // Visually center logo
})

export function Logo() {
  const css = useStyle()

  // prettier-ignore
  return (
    <svg className={css(LogoStyle)} viewBox="0 0 245 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M78.125 0L71.0522 42.2514H237.842L244.932 0H78.125Z" fill="black"/>
      <path d="M54.9245 35.9528C51.3369 35.9528 48.0056 33.9747 46.2289 30.7646C45.2551 29.0121 44.7938 27.0167 44.8622 24.9345C42.5558 23.876 40.7279 22.2449 39.3099 20.4751C38.3532 24.7609 36.3886 28.9254 33.7235 31.771C31.0072 34.6688 27.7954 35.866 24.652 35.1199C22.5507 34.6341 20.9448 33.2286 19.9027 31.077C16.3321 35.3628 12.9666 35.9007 10.6945 35.519C8.21733 35.1199 6.32102 33.6624 5.22765 31.3199C3.41677 27.5025 4.08304 21.8459 5.6035 16.8486C3.98053 17.213 2.10131 17.2997 0 16.9874L0.683354 12.233C5.1764 12.8924 7.85857 10.8796 8.43942 10.0294C8.49067 9.92524 8.54192 9.83849 8.61025 9.73438L12.7958 11.9901C12.7104 12.1463 12.625 12.3024 12.5395 12.4586C9.7207 17.5947 7.84148 25.75 9.49861 29.2897C9.92571 30.192 10.5066 30.6432 11.4462 30.7993C12.6762 30.9902 14.0429 30.3482 15.495 28.8559C16.6226 27.7107 17.6305 26.2705 18.5189 24.7089C18.4676 23.3728 18.536 21.9326 18.7068 20.4057C19.0656 17.213 20.3127 9.75173 24.2078 9.75173C25.267 9.75173 26.2066 10.3417 26.702 11.3481C27.9321 13.812 26.0529 20.4057 23.3365 25.7326C23.4219 26.6002 23.5757 27.3811 23.7807 28.0578C24.4299 30.1573 25.3866 30.3829 25.7112 30.4523C27.1975 30.7993 28.735 30.1226 30.2896 28.4742C33.9968 24.518 36.0811 16.7965 34.9023 11.6257C34.8169 11.296 34.7656 11.0878 34.7485 11.0184L39.3441 9.83849C39.3953 10.012 39.4295 10.1855 39.4808 10.359C39.9078 11.886 41.7187 17.4732 45.9043 20.0413C46.2801 19.0696 46.7585 18.0805 47.3393 17.1088C49.8336 12.9271 54.5145 8.88414 60.2034 10.0988C63.364 10.7755 65.7215 13.0485 66.0632 15.7728C66.4049 18.4623 65.4994 20.9956 63.5348 22.887C60.5793 25.7326 55.4883 26.9299 49.6798 26.2011C49.7823 26.9993 50.0215 27.7454 50.3802 28.4048C51.3198 30.0879 53.0795 31.1464 54.9587 31.1464C58.1192 31.1464 60.5451 29.8276 61.5531 28.5436L65.2773 31.5108C63.1248 34.2523 59.1784 35.9528 54.9245 35.9528ZM50.4315 21.4468C55.42 22.0541 58.7342 20.8395 60.2376 19.3993C61.126 18.549 61.4847 17.56 61.331 16.3801C61.2626 15.8075 60.4426 15.0613 59.1955 14.8011C58.1534 14.5755 54.5316 14.2632 51.3711 19.5901C50.9953 20.2322 50.6877 20.8395 50.4315 21.4468Z" fill="black"/>
      <path d="M123.859 18.2538V23.8758C123.859 26.7214 122.817 28.1096 120.647 28.1096C118.683 28.1096 117.64 26.7214 117.64 24.1187V12.7186H111.695V18.2538V25.8365C111.695 30.4 114.582 33.6274 118.751 33.6274C121.006 33.6274 123.124 32.6904 124.372 31.1461V33.2283H129.992V27.6411V12.7186H123.859V18.2538Z" fill="white"/>
      <path d="M162.723 11.6083V27.624V33.2112H168.669V27.624V6.03845H162.723V11.6083Z" fill="white"/>
      <path d="M180.9 6.03845H174.955V11.6257H180.9V6.03845Z" fill="white"/>
      <path d="M174.955 18.2539V27.6238V33.211H180.9V27.6238V16.7443H174.955V18.2539Z" fill="white"/>
      <path d="M96.6591 12.3027C94.2161 12.3027 92.3711 13.205 91.0385 15.079V12.7192H87.8609H85.0934H82.8895L81.9158 18.3064H85.0934V34.6344V39.2326H91.0385V34.6344V31.2855C93.2082 33.0727 94.5749 33.6106 97.0179 33.6106C102.314 33.6106 106.841 28.7521 106.841 23.0608C106.841 17.1612 102.228 12.3027 96.6591 12.3027ZM95.8562 27.9019C93.0886 27.9019 90.8335 25.6982 90.8335 22.974C90.8335 20.1978 93.0886 18.0114 95.8562 18.0114C98.6238 18.0114 100.828 20.2151 100.828 22.9393C100.828 25.7156 98.6238 27.9019 95.8562 27.9019Z" fill="white"/>
      <path d="M227.745 27.624V21.0997C227.745 15.8075 224.858 12.3024 220.57 12.3024C218.161 12.3024 216.35 13.3262 215.035 15.4431V6.03845H209.107V11.6257V27.6413V33.2286H215.035V27.6413V22.349C215.035 19.6595 216.231 18.2367 218.52 18.2367C220.843 18.2367 221.817 19.4687 221.817 22.5573V33.2286H224.79H227.762H229.761L230.735 27.6413H227.745V27.624Z" fill="white"/>
      <path d="M197.814 12.9098C196.84 12.2852 195.713 11.9034 194.295 11.9034C190.007 11.9034 186.59 14.9573 186.59 18.7053C186.59 20.7875 187.547 22.54 189.238 23.5985C190.519 24.414 190.759 24.5008 194.5 25.5592C196.704 26.2186 197.302 26.6524 197.302 27.6761C197.302 28.7346 196.499 29.394 195.252 29.394C193.8 29.394 192.262 29.151 192.006 27.6414H186.966L186.061 32.8296H191.613C192.843 33.5757 194.227 34.0442 195.85 34.0442C200.189 34.0442 203.589 30.9556 203.589 27.1209C203.589 26.1839 203.384 25.2816 203.025 24.4661C202.188 22.7136 200.821 21.7419 198.173 20.961L195.559 20.1802C193.441 19.5729 192.877 19.1565 192.877 18.2195C192.877 17.3692 193.68 16.7446 194.756 16.7446C196.003 16.7446 197.438 16.9181 197.592 18.098H202.632L203.537 12.9098H197.814Z" fill="white"/>
      <path d="M148.442 12.3022C145.947 12.3022 144.154 13.083 142.906 14.6967V6.02087H137.781H136.961H134.792L133.818 11.6081H136.961V27.6237V33.211H139.934H142.906V30.9206C144.547 32.8292 146.272 33.6101 148.595 33.6101C153.891 33.6101 158.384 28.7169 158.384 23.0082C158.401 17.1086 153.908 12.3022 148.442 12.3022ZM147.605 27.9014C144.957 27.9014 142.787 25.663 142.787 22.8867C142.787 20.1625 144.905 17.9935 147.553 17.9935C150.201 17.9935 152.371 20.1972 152.371 22.9561C152.371 25.715 150.253 27.9014 147.605 27.9014Z" fill="white"/>
    </svg>
  )
}

export function SmallLogo() {
  const css = useStyle()

  // prettier-ignore
  return (
  <svg className={css(LogoStyle, SmallLogoStyle)} viewBox="0 0 177 176" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54.4724 169.008C99.2583 187.967 150.976 167.129 169.986 122.463C188.996 77.7982 168.101 26.2204 123.315 7.26114C78.5295 -11.6981 26.8123 9.14068 7.80185 53.8059C-11.2086 98.4711 9.68646 150.049 54.4724 169.008Z" fill="white"></path>
    <path d="M93.4599 101.621C89.128 101.621 85.8652 103.184 83.5241 106.438V102.338H77.9018H72.9984H69.1089L67.3945 112.045H73.0168V140.43V148.427H83.5241V140.43V134.621C87.3583 137.728 89.7732 138.665 94.1051 138.665C103.469 138.665 111.507 130.227 111.507 120.318C111.488 110.041 103.322 101.621 93.4599 101.621ZM92.0405 128.738C87.1371 128.738 83.1554 124.914 83.1554 120.171C83.1554 115.354 87.1371 111.53 92.0405 111.53C96.9439 111.53 100.833 115.354 100.833 120.097C100.833 124.914 96.9439 128.738 92.0405 128.738Z" fill="black"></path>
    <path d="M123.36 85.9187C117.646 85.9187 112.355 82.8118 109.535 77.8297C107.986 75.0905 107.249 71.9835 107.36 68.7295C103.691 67.075 100.797 64.538 98.5297 61.7803C97.0181 68.4722 93.8844 74.9618 89.6446 79.4291C85.3311 83.9516 80.2065 85.8084 75.2294 84.6686C71.8928 83.8965 69.3305 81.7087 67.6715 78.3628C61.9939 85.0547 56.6481 85.8819 53.035 85.312C49.0902 84.687 46.0855 82.4073 44.3343 78.7673C41.477 72.7557 42.5278 63.9129 44.961 56.1364C42.3619 56.6879 39.394 56.835 36.0575 56.357L37.1451 48.9298C44.279 49.9777 48.5372 46.8157 49.4773 45.492C49.5695 45.3449 49.6432 45.1795 49.7354 45.0324L56.3716 48.5622C56.261 48.8012 56.1319 49.0401 55.966 49.2791C51.4866 57.2946 48.5003 70.0164 51.1364 75.5501C51.8184 76.9656 52.7401 77.6642 54.2148 77.9032C56.1688 78.2158 58.3255 77.2046 60.6482 74.8698C62.4363 73.0866 64.04 70.8253 65.4594 68.3986C65.3857 66.3212 65.4779 64.06 65.7544 61.67C66.3258 56.6696 68.3167 45.0508 74.492 45.0508C76.1879 45.0508 77.6811 45.9884 78.4737 47.5326C80.4277 51.3565 77.4414 61.6517 73.1095 69.9797C73.2569 71.3217 73.4781 72.5534 73.81 73.6013C74.8422 76.8737 76.3723 77.223 76.87 77.3517C79.2295 77.8848 81.6812 76.8553 84.1513 74.2632C90.0317 68.0861 93.3498 56.0261 91.4696 47.9739C91.3221 47.4591 91.2483 47.1282 91.2299 47.0363L98.5297 45.1795C98.6034 45.4552 98.6772 45.7126 98.7509 45.9884C99.433 48.3783 102.29 57.074 108.963 61.1001C109.553 59.5743 110.309 58.0484 111.231 56.5225C115.194 49.9777 122.623 43.672 131.674 45.5655C136.688 46.6134 140.43 50.18 140.983 54.4267C141.517 58.6183 140.098 62.5709 136.964 65.5307C132.282 69.9797 124.171 71.8365 114.954 70.6966C115.12 71.9468 115.489 73.105 116.079 74.1529C117.572 76.7818 120.355 78.418 123.36 78.418C128.392 78.418 132.245 76.3773 133.849 74.3551L139.766 79.0063C136.393 83.2714 130.107 85.9187 123.36 85.9187ZM116.208 63.2878C124.153 64.2254 129.406 62.3319 131.784 60.089C133.185 58.747 133.757 57.2211 133.517 55.3827C133.406 54.5002 132.098 53.3236 130.125 52.9192C128.485 52.5699 122.715 52.0919 117.682 60.4015C117.111 61.3575 116.613 62.3319 116.208 63.2878Z" fill="black"></path>
  </svg>
  )
}