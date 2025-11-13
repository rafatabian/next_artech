import styles from "./MarketingGraph.module.css"


const MarketingGraph = () => {

  return (
    <div className={styles.marke_graph_background}>
      <section  className={styles.marketing_graps_container}>
        <h1>Proven results</h1>
        <p>With a modest ad budget, our campaign reached over 170 000 highly targeted people in just two weeks generating a 230 % performance lift on Meta. That visibility didn’t just look good on a dashboard it translated into real outcomes: more store visits, more enquiries, and measurable sales growth. Now imagine what happens when we scale those results.</p>


          <div className={styles.markeging_graphs_numbers_container}>
            <div>
               <p className={styles["text-2xl"]}>+230%</p>
              <span>Views</span>
              <div className={styles.marketing_graphs_bar_container}>
                <div className={styles.marketing_graphs_bar} style={{ width: "100%" }}></div>
              </div>
            </div>

            <div>
              <p className={styles["text-2xl"]}>+190%</p>
              <span>Clicks</span>
              <div className={styles.marketing_graphs_bar_container}>
                <div className={styles.marketing_graphs_bar} style={{ width: "100%" }}></div>
              </div>
            </div>

            <div>
              <p className={styles["text-2xl"]}>+180%</p>
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