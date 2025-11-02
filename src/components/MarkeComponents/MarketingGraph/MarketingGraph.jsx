import styles from "./MarketingGraph.module.css"


const MarketingGraph = () => {

  return (
    <div className={styles.marke_graph_background}>
      <section  className={styles.marketing_graps_container}>
        <h1>Smart campaigns, more customers</h1>
        <p>We make marketing work for you</p>


          <div className={styles.markeging_graphs_numbers_container}>
            <div>
               <p className={styles["text-2xl"]}>500,000</p>
              <span>Views</span>
              <div className={styles.marketing_graphs_bar_container}>
                <div className={styles.marketing_graphs_bar} style={{ width: "100%" }}></div>
              </div>
            </div>

            <div>
              <p className={styles["text-2xl"]}>14,850</p>
              <span>Clicks</span>
              <div className={styles.marketing_graphs_bar_container}>
                <div className={styles.marketing_graphs_bar} style={{ width: "100%" }}></div>
              </div>
            </div>

            <div>
              <p className={styles["text-2xl"]}>2,200</p>
              <span>Leads</span>
              <div className={styles.marketing_graphs_bar_container}>
                <div className={styles.marketing_graphs_bar} style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default MarketingGraph;