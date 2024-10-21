const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-rich-black h-[234px] w-full flex flex-col items-center justify-center space-y-7">
      <svg
        width="160"
        height="43"
        viewBox="0 0 160 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H5.82474C11.6739 0 16.4157 4.74171 16.4157 10.5909C16.4157 16.4316 11.6877 21.168 5.85024 21.1818C11.6877 21.1956 16.4157 25.932 16.4157 31.7727C16.4157 37.6219 11.674 42.3636 5.82475 42.3636H0V42.3631C4.49471 42.3054 8.12457 37.586 8.12457 31.7727C8.12457 25.9593 4.49471 21.2399 0 21.1823V21.1818V21.1818V21.1813C4.49471 21.1237 8.12457 16.4043 8.12457 10.5909C8.12457 4.77758 4.49471 0.0581805 0 0.00054455V0Z"
          fill="#FCFCFC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.6154 10.5909C20.6154 16.4043 16.7741 21.1237 12.0176 21.1813V21.1818H18.7984C24.6476 21.1818 29.3893 16.4401 29.3893 10.5909C29.3893 4.74171 24.6476 0 18.7984 0H12.0176V0.000532046C16.7741 0.0580847 20.6154 4.77751 20.6154 10.5909ZM20.6154 31.7728C20.6154 37.5862 16.7741 42.3056 12.0176 42.3631V42.3637H18.7984C24.6476 42.3637 29.3893 37.622 29.3893 31.7728C29.3893 25.9236 24.6476 21.1818 18.7984 21.1818H12.0176V21.1824C16.7741 21.2399 20.6154 25.9594 20.6154 31.7728Z"
          fill="#FCFCFC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.5901 10.5909C33.5901 16.4043 29.7487 21.1237 24.9922 21.1813V21.1818H31.773C37.6222 21.1818 42.3639 16.4401 42.3639 10.5909C42.3639 4.74171 37.6222 0 31.773 0H24.9922V0.000532046C29.7487 0.0580847 33.5901 4.77751 33.5901 10.5909ZM33.5901 31.7728C33.5901 37.5862 29.7487 42.3056 24.9922 42.3631V42.3637H31.773C37.6222 42.3637 42.3639 37.622 42.3639 31.7728C42.3639 25.9236 37.6222 21.1818 31.773 21.1818H24.9922V21.1824C29.7487 21.2399 33.5901 25.9594 33.5901 31.7728Z"
          fill="#FCFCFC"
        />
        <path
          d="M147.881 22.0547H143.622C143.586 17.6516 146.932 14.707 151.948 14.707C156.965 14.707 159.972 17.5072 159.972 22.2352L160.001 28.7991L159.972 35.3637H155.569V33.8206C154.017 34.795 152.162 35.3637 150.285 35.3637C145.954 35.3637 143.117 32.81 143.117 29.0204C143.117 25.2669 145.932 22.8126 150.805 22.2713L154.017 21.9104C154.666 21.8382 155.172 21.766 155.533 21.6216C155.28 19.7449 154.197 18.9148 151.887 18.9148C149.253 18.9148 148.026 19.9253 147.881 22.0547ZM150.552 31.1137C153.62 31.1137 155.46 29.1647 155.569 25.7361C154.161 25.9887 152.501 26.1331 151.238 26.2413C148.711 26.5662 147.52 27.4684 147.52 28.9843C147.52 30.3919 148.495 31.1137 150.552 31.1137Z"
          fill="#FCFCFC"
        />
        <path
          d="M131.555 35.3631C129.534 35.3631 127.671 34.7222 126.155 33.5673V35.3631H121.824V7.00391H126.227V16.3155C127.671 15.2689 129.498 14.7064 131.555 14.7064C137.149 14.7064 140.917 18.9141 140.917 25.0136C140.917 31.113 137.149 35.3631 131.555 35.3631ZM131.388 31.0769C134.528 31.0769 136.477 28.8032 136.477 25.0136C136.477 21.224 134.528 18.9141 131.388 18.9141C128.249 18.9141 126.263 21.224 126.263 25.0136C126.263 28.8032 128.212 31.0769 131.388 31.0769Z"
          fill="#FCFCFC"
        />
        <path
          d="M96.9071 22.5961V35.3637H92.5039V14.707H96.8349V15.7026C97.9537 15.053 99.3252 14.7281 100.769 14.7281C103.079 14.7281 105.136 15.6304 106.435 17.1463C107.807 15.5943 109.828 14.7281 112.174 14.7281C116.685 14.7281 119.681 17.832 119.681 22.3795V35.3637H115.35V22.5961C115.35 20.2501 114.123 18.9148 112.029 18.9148C109.828 18.9148 108.312 20.4667 108.312 22.6322V35.3637H103.945V22.56C103.945 20.178 102.754 18.9148 100.624 18.9148C98.3868 18.9148 96.9071 20.4306 96.9071 22.5961Z"
          fill="#FCFCFC"
        />
        <path
          d="M78.2736 22.0637H74.0272C73.9913 17.6425 77.302 14.707 82.304 14.707C87.306 14.707 90.3289 17.4975 90.3289 22.2449V35.3637H85.9386V33.8779C84.3912 34.8563 82.5919 35.3637 80.7206 35.3637C76.4023 35.3637 73.5234 32.8632 73.5234 29.058C73.5234 25.289 76.3303 22.8247 81.1884 22.2811L84.3912 21.9187C85.0389 21.8463 85.5427 21.7738 85.9026 21.6288C85.6507 19.7444 84.5711 18.9108 82.268 18.9108C79.641 18.9108 78.4175 19.9256 78.2736 22.0637ZM80.9365 31.1599C83.9953 31.1599 85.8306 29.2029 85.9386 25.7602C84.5351 26.0138 82.8798 26.1588 81.6203 26.2675C79.1013 26.5937 77.9137 27.4997 77.9137 29.0217C77.9137 30.4351 78.8853 31.1599 80.9365 31.1599Z"
          fill="#FCFCFC"
        />
        <path
          d="M62.2656 35.3631H50.7656V7.00391H61.6167C67.3126 7.00391 70.8455 10.0896 70.8455 15.159C70.8455 17.4365 70.0524 19.457 68.6104 20.9263C70.3768 22.359 71.3862 24.5631 71.4223 27.1712C71.3862 32.0937 67.7091 35.3631 62.2656 35.3631ZM61.7248 11.3386H55.2358V18.9794H61.7248C64.7891 18.9794 66.3392 17.6937 66.3392 15.159C66.3392 12.6243 64.8251 11.3386 61.7248 11.3386ZM62.3737 23.3141H55.2358V31.0284H62.3737C65.2577 31.0284 66.8079 29.7059 66.916 27.1712C66.8079 24.6365 65.2938 23.3141 62.3737 23.3141Z"
          fill="#FCFCFC"
        />
      </svg>
      <div className="flex flex-row space-x-4">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5898 9.11328C11.7279 9.11328 10.9012 9.45569 10.2917 10.0652C9.68225 10.6747 9.33984 11.5013 9.33984 12.3633C9.33984 13.2252 9.68225 14.0519 10.2917 14.6614C10.9012 15.2709 11.7279 15.6133 12.5898 15.6133C13.4518 15.6133 14.2784 15.2709 14.8879 14.6614C15.4974 14.0519 15.8398 13.2252 15.8398 12.3633C15.8398 11.5013 15.4974 10.6747 14.8879 10.0652C14.2784 9.45569 13.4518 9.11328 12.5898 9.11328Z"
            fill="#FCFCFC"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.36045 3.44505C10.8365 3.05998 14.3444 3.05998 17.8204 3.44505C19.7194 3.65705 21.2505 5.15205 21.4734 7.05805C21.8854 10.5827 21.8854 14.1434 21.4734 17.6681C21.2505 19.5741 19.7195 21.0691 17.8215 21.2821C14.3451 21.6672 10.8368 21.6672 7.36045 21.2821C5.46145 21.0691 3.93045 19.5741 3.70745 17.6691C3.29543 14.1441 3.29543 10.5831 3.70745 7.05805C3.93045 5.15205 5.46145 3.65705 7.36045 3.44505ZM17.5905 6.36305C17.3252 6.36305 17.0709 6.46841 16.8833 6.65595C16.6958 6.84348 16.5905 7.09784 16.5905 7.36305C16.5905 7.62827 16.6958 7.88262 16.8833 8.07016C17.0709 8.2577 17.3252 8.36305 17.5905 8.36305C17.8557 8.36305 18.11 8.2577 18.2976 8.07016C18.4851 7.88262 18.5905 7.62827 18.5905 7.36305C18.5905 7.09784 18.4851 6.84348 18.2976 6.65595C18.11 6.46841 17.8557 6.36305 17.5905 6.36305ZM7.84045 12.3631C7.84045 11.1033 8.3409 9.89509 9.23169 9.0043C10.1225 8.1135 11.3307 7.61305 12.5905 7.61305C13.8502 7.61305 15.0584 8.1135 15.9492 9.0043C16.84 9.89509 17.3405 11.1033 17.3405 12.3631C17.3405 13.6228 16.84 14.831 15.9492 15.7218C15.0584 16.6126 13.8502 17.1131 12.5905 17.1131C11.3307 17.1131 10.1225 16.6126 9.23169 15.7218C8.3409 14.831 7.84045 13.6228 7.84045 12.3631Z"
            fill="#FCFCFC"
          />
        </svg>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0604 2.36342H4.12039C3.92997 2.36078 3.74089 2.39567 3.56396 2.4661C3.38702 2.53654 3.22569 2.64114 3.08919 2.77393C2.95268 2.90672 2.84367 3.06511 2.76838 3.24003C2.69309 3.41496 2.653 3.603 2.65039 3.79342V20.9334C2.653 21.1238 2.69309 21.3119 2.76838 21.4868C2.84367 21.6617 2.95268 21.8201 3.08919 21.9529C3.22569 22.0857 3.38702 22.1903 3.56396 22.2607C3.74089 22.3312 3.92997 22.3661 4.12039 22.3634H21.0604C21.2508 22.3661 21.4399 22.3312 21.6168 22.2607C21.7938 22.1903 21.9551 22.0857 22.0916 21.9529C22.2281 21.8201 22.3371 21.6617 22.4124 21.4868C22.4877 21.3119 22.5278 21.1238 22.5304 20.9334V3.79342C22.5278 3.603 22.4877 3.41496 22.4124 3.24003C22.3371 3.06511 22.2281 2.90672 22.0916 2.77393C21.9551 2.64114 21.7938 2.53654 21.6168 2.4661C21.4399 2.39567 21.2508 2.36078 21.0604 2.36342ZM8.68039 19.1034H5.68039V10.1034H8.68039V19.1034ZM7.18039 8.84342C6.76665 8.84342 6.36986 8.67906 6.0773 8.38651C5.78475 8.09395 5.62039 7.69716 5.62039 7.28342C5.62039 6.86968 5.78475 6.47289 6.0773 6.18033C6.36986 5.88778 6.76665 5.72342 7.18039 5.72342C7.40009 5.69851 7.62257 5.72028 7.83327 5.7873C8.04396 5.85433 8.23813 5.96511 8.40305 6.11238C8.56797 6.25965 8.69992 6.4401 8.79026 6.6419C8.88061 6.84371 8.92731 7.06232 8.92731 7.28342C8.92731 7.50452 8.88061 7.72313 8.79026 7.92494C8.69992 8.12674 8.56797 8.30719 8.40305 8.45446C8.23813 8.60173 8.04396 8.71251 7.83327 8.77954C7.62257 8.84657 7.40009 8.86834 7.18039 8.84342ZM19.5004 19.1034H16.5004V14.2734C16.5004 13.0634 16.0704 12.2734 14.9804 12.2734C14.6431 12.2759 14.3146 12.3817 14.0392 12.5766C13.7639 12.7715 13.5549 13.0461 13.4404 13.3634C13.3621 13.5985 13.3282 13.846 13.3404 14.0934V19.0934H10.3404V10.0934H13.3404V11.3634C13.6129 10.8905 14.0093 10.5009 14.4868 10.2366C14.9644 9.97231 15.505 9.84327 16.0504 9.86342C18.0504 9.86342 19.5004 11.1534 19.5004 13.9234V19.1034Z"
            fill="#FCFCFC"
          />
        </svg>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4099 21.1313L4.3429 4.33128C4.27403 4.24259 4.23143 4.13635 4.21994 4.02465C4.20846 3.91295 4.22855 3.80027 4.27793 3.69942C4.32732 3.59857 4.40401 3.5136 4.49929 3.45418C4.59457 3.39475 4.70461 3.36326 4.8169 3.36328H7.2969C7.3882 3.36342 7.47826 3.38439 7.56023 3.42459C7.6422 3.46479 7.71391 3.52317 7.7699 3.59528L20.8369 20.3953C20.9058 20.484 20.9484 20.5902 20.9599 20.7019C20.9713 20.8136 20.9513 20.9263 20.9019 21.0271C20.8525 21.128 20.7758 21.213 20.6805 21.2724C20.5852 21.3318 20.4752 21.3633 20.3629 21.3633H17.8829C17.7916 21.3631 17.7015 21.3422 17.6196 21.302C17.5376 21.2618 17.4659 21.2034 17.4099 21.1313Z"
            stroke="#FCFCFC"
            stroke-width="1.5"
          />
          <path
            d="M20.5898 3.36328L4.58984 21.3633"
            stroke="#FCFCFC"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <svg
          width="66"
          height="24"
          viewBox="0 0 66 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6128_1876)">
            <path
              d="M4.04004 23.6988H0.628906V2.8568H4.04004V23.6988ZM11.7809 23.9468C7.99822 23.9468 5.82888 21.8911 5.82888 18.3063V8.36028H9.24002V18.0547C9.24002 20.1685 10.0189 20.9546 12.1158 20.9546C14.833 20.9546 15.9414 19.6528 15.9414 16.4629V8.36028H19.3526V23.6997H16.0811V21.0218C15.6343 23.0792 13.653 23.9468 11.7809 23.9468ZM42.8661 23.6988H39.4827V13.7805C39.4827 11.766 38.8551 11.0167 37.1657 11.0167C34.9919 11.0167 33.8432 12.3104 33.8432 14.7582V23.6988H30.4598V13.7805C30.4598 11.8171 29.8125 11.0167 28.2269 11.0167C25.3986 11.0167 24.8202 13.9676 24.8202 14.7582V23.6988H21.4091V8.36028H24.6806V11.0426C25.2616 9.16069 27.0997 8.02454 28.953 8.02454C30.8054 8.02454 32.3632 8.73183 33.0392 11.0426C33.9461 8.64678 35.5774 8.02454 37.5292 8.02454C40.9206 8.02454 42.8661 9.71489 42.8661 12.6631V23.6988ZM49.7287 23.9468C45.0176 23.9468 44.2181 20.9519 44.2181 19.4236C44.2181 17.6241 45.0086 16.0027 46.7187 15.3455C47.4716 15.0671 48.1977 14.8593 48.9426 14.7098C49.5989 14.5782 50.6115 14.4385 51.3519 14.3365L51.5963 14.3025C52.8838 14.1234 54.2527 13.4779 54.2527 12.6354C54.2527 11.2029 52.4164 10.9889 51.3215 10.9889C50.0797 10.9889 49.2049 11.3085 48.8567 11.8887C48.5442 12.4671 48.5227 12.6023 48.443 13.1063L48.3875 13.5029H44.9764L45.0373 13.0007C45.1581 12.0033 45.3426 11.2969 45.6174 10.7776C46.5611 8.95208 48.4618 8.02454 51.2651 8.02454C53.6027 8.02454 55.2608 8.76138 56.0335 9.45166C56.5089 9.86351 56.8482 10.3327 57.098 10.9253C57.6209 12.032 57.6638 12.7724 57.6638 13.5576V21.2957C57.6638 22.0183 57.7337 22.636 57.8707 23.1311L58.0282 23.6997H54.5446L54.4819 23.3245C54.4371 23.0595 54.4219 21.5563 54.4031 20.9761C53.5982 23.0899 51.8721 23.9468 49.7287 23.9468ZM54.2527 15.5559C53.5391 16.1029 52.42 16.4154 50.795 16.7404C47.9954 17.2579 47.5235 17.9097 47.5235 19.1774C47.5235 20.2966 48.4753 20.9913 50.008 20.9913C52.9832 20.9913 54.2527 19.6054 54.2527 16.3563V15.5559ZM65.3725 6.10947C62.229 6.10947 59.681 3.56141 59.681 0.417969C59.681 3.56141 57.1329 6.10947 53.9895 6.10947C57.1329 6.10947 59.681 8.65752 59.681 11.801C59.681 8.65752 62.229 6.10947 65.3725 6.10947Z"
              fill="#FCFCFC"
            />
          </g>
          <defs>
            <clipPath id="clip0_6128_1876">
              <rect
                width="64.8206"
                height="23.6362"
                fill="white"
                transform="translate(0.589844 0.363281)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div>
        <p className="text-dim-gray">
          © {currentYear} Bamba Labs. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
