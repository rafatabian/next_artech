import styles from "./MovingSection.module.css"
import Image from "next/image";

const MovingSection = ({ props }) => {

  return (
    <div
      className={
  props.themeColor === "dark"
    ? styles.moving_section_main_container_dark
    : styles.moving_section_main_container
}
    >
      <div className={styles.moving_section_container}>
        <h2>Tools</h2>
        <p>Cutting-edge tools for exceptional results</p>

        <div className={styles.moving_section_animation_container}>
          <div className={styles.moving_section} role="list" >
            {props.firstSet.map((item, index) => (
              <div key={index} className={styles.moving_section_item} role="listitem">
                <Image width={100} height={100} src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingSection;