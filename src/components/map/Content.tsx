import styles from "@styles/map/Content.module.css";
import { MarkerInfoType } from "@type/map";

interface ContentProps {
  markerInfoList?: MarkerInfoType[];
}

export const Content = ({ markerInfoList }: ContentProps) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.marker_list}>
        {markerInfoList?.map((markerInfo) => {
          return (
            <li className={styles.content} key={markerInfo.id}>
              <div className={styles.content_info}>
                <div className={styles.title}>
                  <h3>{markerInfo?.name}</h3>
                  <span>{markerInfo?.category}</span>
                </div>
                <div className={styles.detail}>
                  <strong className={styles.time}>{markerInfo?.time}</strong>
                  <strong className={styles.location}>
                    {markerInfo?.location}
                  </strong>
                </div>
              </div>
              <div className={styles.image}>
                <img src={markerInfo?.imagePath} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
