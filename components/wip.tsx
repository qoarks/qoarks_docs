import React from "react";

import styles from "./wip.module.css";

const WorkInProgress = () => {
	return (
		<div className={styles.wipContainer}>
			<div className={styles.wipStripes}></div>
			<div className={styles.wipText}>Work in Progress...</div>
		</div>
	);
};

export default WorkInProgress;
