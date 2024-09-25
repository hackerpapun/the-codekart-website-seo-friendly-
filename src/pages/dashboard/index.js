import DashboardLayout from "@/components/dashboard_nested_layout";
import styles from "../../styles/DashboardStyles/dashboard.module.css";
import { roboto } from "@/assets/fonts/fonts";
import Image from "next/image";
import { IMAGES } from "@/constants/images";

export default function dashboard() {
  return (
    <DashboardLayout>
      <div className={roboto.variable}>
        <Image
          src={IMAGES.dashboard.oracleImg}
          width={100}
          height={50}
          alt="Oracle"
        />
        <div id={styles.dashboard1}>dashboard</div>
      </div>
    </DashboardLayout>
  );
}
