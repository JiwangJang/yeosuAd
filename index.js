(() => {
  // 처음 문여는 이벤트 관련 JS
  const mascot = document.querySelector(".mascot");
  const circleCon = document.querySelector(".circle-con");
  const door1 = document.querySelector(".door-1");
  const door2 = document.querySelector(".door-2");
  const content = document.querySelector(".content");
  const img = content.querySelector(".img");
  const comment = content.querySelector(".comment");
  const commentTitle = comment.querySelector(".comment-title");
  const commentMain = comment.querySelector(".comment-main");
  const commentAddress = comment.querySelector(".comment-address span");
  const wheelDown = document.querySelector(".wheel-down");
  const rightRect = document.querySelector(".right-rect");
  const number = document.querySelector(".number");
  const progressCircles = document.querySelector(".progress-circles");

  /**콘텐츠의 데이터가 있는 배열 */
  const contentDatas = [
    {
      title: "만성리해수욕장",
      main: `다른 해수욕장과 달리 <br />
  모래가 검은색으로 유명한 곳! <br />
  인근에 대형카페(NCNP)가 <br />
  있어 해수욕도 즐기고 <br />
  감성도 즐길 수 있음!`,
      address: "만흥동 65-2 앞",
      rgba: "rgba(134, 189, 218, 0.8)",
      imgUrl: "jpg/mansung-li.jpg",
    },
    {
      title: "여자만갯벌",
      main: `매년 9~10월경 이 곳에서 <br />
  갯벌 체험행사가 열리며, <br />
  굳이 갯벌체험이 아니더라도 <br />
  이곳에서 보는 노을이 멋짐!`,
      address: "소라면 서부로 785-24",
      rgba: "rgba(235, 110, 37, 0.5)",
      imgUrl: "jpg/yeojaman.jpg",
    },
    {
      title: "하멜등대",
      main: `조선시대에 얼떨결에 여수로 온 <br />
  하멜이라는 네덜란드인을 기리기<br />
  위한 등대로, 주위에 볼거리와<br />
  놀거리가 많음!`,
      address: "종화동 1255-1",
      rgba: "rgba(207, 68, 75, 0.7)",
      imgUrl: "jpg/hamel.jpg",
    },
    {
      title: "여수해상케이블카",
      main: `밤에타도, 낮에타도 멋진 풍경을 <br />
  볼 수 있는 케이블카! <br />
  돌산공원이나 자산공원에서 <br />
  탈 수 있음!<br />`,
      address: "자산 4길 39 또는 돌산로 3600-1",
      rgba: "rgba(179, 217, 68, 0.6)",
      imgUrl: "jpg/cable-car.jpg",
    },
    {
      title: "향일암",
      main: `이 곳을 한마디로 표현하자면 <br />
  "고진감래", 절벽에 위치해있어<br />
  가기 힘들지만 가기만 한다면...<br />`,
      address: "돌산읍 향일암로 60",
      rgba: "rgba(117, 204, 188, 0.9)",
      imgUrl: "jpg/hyangliam.jpg",
    },
  ];

  let scrollHeight = document.body.scrollHeight - window.innerHeight;
  let prevScrollY = 0;

  /**
   * 화면의 크기가 변할때 마다 화면크기에 의존하는 것들 초기화
   */
  const resize = () => {
    scrollHeight = document.body.scrollHeight - window.innerHeight;
    door1.style.width = "50vw";
    door2.style.width = "50vw";
  };

  /**
   * lowNum < targetNum <= highNum이 참인지 판단
   * @param {number} lowNum
   * @param {number} targetNum
   * @param {number} highNum
   * @returns {boolean}
   */
  const isBetween = (lowNum, targetNum, highNum) => {
    if (lowNum < targetNum && targetNum <= highNum) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * 콘텐츠 영역 안보이게 해주는 함수
   */
  const contentRemove = () => {
    img.classList.remove("active");
    comment.classList.remove("active");
  };

  /**사진, 글내용, 오른쪽 사각형 색깔 변경
   * @param {number} index 글 데이터의 색인
   * @param {boolean} isNext 다음으로 넘어 갈건지
   *  */
  const contentChange = (index) => {
    const { title, main, address, rgba, imgUrl } = contentDatas[index];
    commentAddress.innerHTML = address;
    commentMain.innerHTML = main;
    commentTitle.innerHTML = title;
    rightRect.style.backgroundColor = rgba;
    img.style.backgroundImage = `url(public/${imgUrl})`;
    number.innerHTML = `0${index + 1}`;

    const progressArr = Array.from(
      { length: index + 1 },
      (value, index) => index
    );

    Array.from(progressCircles.children).forEach((circle) =>
      circle.classList.remove("active")
    );

    progressArr.forEach((index) => {
      progressCircles.children[index].classList.add("active");
    });
  };

  /**스크롤 이벤트 */
  const scrollEvent = () => {
    const scrollRatio = Math.floor((scrollY / scrollHeight) * 100);
    if (isBetween(0, scrollRatio, 10)) {
      wheelDown.style.opacity = `${1 - scrollRatio / 10}`;
    } else {
      console.log(scrollRatio);
      if (prevScrollY > scrollY) {
        // 스크롤 올릴 때
        switch (scrollRatio) {
          case 12:
            document.body.style.backgroundColor = "black";
            content.classList.remove("active");
            rightRect.classList.remove("active");
            contentRemove();
          case 30:
            contentChange(0);
            break;
          case 48:
            contentChange(1);
            break;
          case 64:
            contentChange(2);
            break;
          case 82:
            contentChange(3);
            break;
        }
      } else {
        // 스크롤 내릴 때
        switch (scrollRatio) {
          case 12:
            document.body.style.backgroundColor = "white";
            content.classList.add("active");
            rightRect.classList.add("active");
            img.classList.add("active");
            comment.classList.add("active");
            contentChange(0);
            break;
          case 30:
            contentChange(1);
            break;
          case 48:
            contentChange(2);
            break;
          case 64:
            contentChange(3);
            break;
          case 82:
            contentChange(4);
            break;
        }
      }
    }
    prevScrollY = scrollY;
  };

  mascot.addEventListener("click", (e) => {
    window.scrollTo(0, 0);
    door1.classList.add("active");
    door2.classList.add("active");
    circleCon.classList.add("active");
    e.target.classList.add("active");
    document.body.style.overflowY = "auto";
    setTimeout(() => {
      e.target.parentElement.style.display = "none";
    }, 4500);
  });

  progressCircles.addEventListener("click", (e) => {
    const ratio = e.target.dataset.ratio;
    const pos = (ratio / 100) * scrollHeight;
    window.scrollTo(0, pos);
  });

  window.addEventListener("load", () => {
    const isMoblie = /Mobile/i.test(window.navigator.userAgent);
    if (isMoblie) {
      document.querySelector(".moblie").classList.add("active");
    }
    window.scrollTo(0, 0);
  });

  window.addEventListener("scroll", scrollEvent);

  window.addEventListener("resize", () => {
    resize();
  });

  scrollEvent();
})();
