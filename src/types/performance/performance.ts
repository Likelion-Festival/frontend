export interface song {
    title : string, // 노래 제목
    img : string, // 노래 이미지
    previewUrl : string // 노래 유튜브 링크
}

export interface Performance {
    artistName : string, // 가수
    artistImg : string, // 가수 사진
    intro : string, // 가수 설명
    songs : song[] // 대표곡

    date : Date, // 공연 날짜
    playTime : number, // 공연 시간
}