const write_notice = document.querySelector(".Notice_pop");
// const  = write_notice.lastElementChild.firstElementChild;
const main = document.querySelector(".main");
const write_noticeBtn = main.firstElementChild.lastElementChild;
const input_element = document.querySelector(".name");
const Notification = document.querySelector("#Notification");
const readNoticeBtn = main.lastElementChild.lastElementChild;
const readNotice = document.querySelector(".readNotice");
const today_date = document.querySelector(".today_date");
const name_array = [];
const content_array = [];
const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const currentDate = `${month}월 ${day}일`;

write_noticeBtn.addEventListener("click", () => {
  document.querySelector(".background").setAttribute("style", "display:block;");
  write_notice.setAttribute("style", "display:block");

  write_notice.firstElementChild.lastElementChild.addEventListener(
    "click",
    () => {
      document.querySelector(".background").setAttribute(
        "style",
        "display:none;"
      );
      write_notice.setAttribute("style", "display:none");
    }
  );

  write_notice.lastElementChild.lastElementChild.firstElementChild.addEventListener(
    "click",
    () => {
      if (input_element.value === "" || Notification.value === "") {
        return alert("입력란을 모두 체워 주신후 제출해주세요");
      } else {
        name_array[0] = input_element.value;
        content_array[0] = Notification.value;
        console.log(name_array);
        console.log(content_array);
        alert("작성 완료");
        input_element.value = "";
        Notification.value = "";
      }
    }
  );
});
readNoticeBtn.addEventListener("click", () => {
  document.querySelector(".background").setAttribute("style", "display:block;");
  readNotice.setAttribute("style", "display:block;");

  content_array.forEach((element) => {
    const li = document.createElement("li");
    li.append(element);
    document.querySelector("ol").append(li);
  });

  today_date.innerHTML = currentDate;

  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".background")
      .setAttribute("style", "display:none;");
    readNotice.setAttribute("style", "display:none;");
  });
});
