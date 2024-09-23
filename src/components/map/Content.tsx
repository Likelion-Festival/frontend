import styles from "@styles/map/Content.module.css";
import { MarkerInfoType } from "@type/map";

interface ContentProps {
  markerInfoList?: MarkerInfoType[];
}

export const Content = ({ markerInfoList }: ContentProps) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {markerInfoList?.map((markerInfo) => {
          return (
            <li key={markerInfo.id} className={styles.content}>
              <div className={styles.content_info}>
                <div className={styles.title}>
                  <h3>{markerInfo?.name}</h3>
                  <span>{markerInfo?.category}</span>
                </div>
                <div className={styles.detail}>
                  <strong>{markerInfo?.time}</strong>
                  <strong>{markerInfo?.location}</strong>
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
