window.onscroll = function () {

  var scroll = window.scrollY;
  var backupHeader = document.querySelector("#backupHeader");
  var backupHeaderOffSet = backupHeader?.getBoundingClientRect()?.y;
  var backupContainerTop = document.querySelector(".backupTablecontainer")?.getBoundingClientRect().y;
  var innerNavbar = document.querySelector(".inner_container_navbar")
  var mainNavbar = document.querySelector(".main_navbar")
  var topHeaderHeight = (innerNavbar?.clientHeight + mainNavbar?.clientHeight);

  // Adds shadow 
  if (scroll >= 15) {
    document.querySelector(".main_wrapper")?.classList.add("scroll_shadow");
  } else document.querySelector(".main_wrapper")?.classList.remove("scroll_shadow");

  // Fixes the Dashboard table header on the offset of 112
  if (backupHeader) {
    if (backupHeaderOffSet <= topHeaderHeight) {
      backupHeader?.classList.add('fixed_container')
      backupHeader?.setAttribute('style', `position: fixed; top: ${topHeaderHeight}px; transition : ease-in-out; background-color:#eff2f6;`);

      if (backupContainerTop >= (topHeaderHeight + 36)) {
        backupHeader?.classList.remove('fixed_container')
        backupHeader?.setAttribute('style', "position: static; transition : ease-in-out; background-color:#eff2f6;");
      }
    }
  }

};