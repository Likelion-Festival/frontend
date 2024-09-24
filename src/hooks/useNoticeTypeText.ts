import { NoticeType } from "@type/notice/NoticeType";

export const useNoticeTypeText = (type: NoticeType): string => {
  switch (type) {
    case NoticeType.Notice:
      return "공지사항";
    case NoticeType.Performance:
      return "공연 안내";
    case NoticeType.Festival:
      return "축제 소개";
    case NoticeType.Booth:
      return "부스 소개";
    case NoticeType.Promotion:
      return "프로모션 안내";
    case NoticeType.Program:
      return "프로그램 소개";
    default:
      return "알 수 없는 타입";
  }
};
