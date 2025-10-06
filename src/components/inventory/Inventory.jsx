import React from "react";
import styles from "./Inventory.module.css";

export default function Inventory({ inventory }) {
  return (
    <div className={styles.inventory}>
      <h3 className={styles.title}>🎒 Инвентарь</h3>
      <div className={styles.slots}>
        {[0, 1, 2].map((index) => {
          const item = inventory[index];
          return (
            <div key={index} className={styles.slot}>
              {item ? (
                <>
                  <img src={item.icon} alt={item.name} className={styles.icon} />
                  <span className={styles.name}>{item.name}</span>
                </>
              ) : (
                <span className={styles.empty}>Пусто</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
