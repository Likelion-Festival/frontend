interface addEventHandleProps {
  target: EventTarget;
  type: string;
  callback: (event: Event) => void;
}

// 엘리먼트에 이벤트 핸들러를 등록하는 함수
export const addEventHandle = ({
  target,
  type,
  callback,
}: addEventHandleProps) => {
  if (target.addEventListener) {
    target.addEventListener(type, callback);
  } else {
    (target as any).attachEvent("on" + type, callback);
  }
};
