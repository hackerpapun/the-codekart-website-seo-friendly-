import DashboardLayout from "@/components/dashboard_nested_layout";
import styles from "../../styles/dashboard.module.css";
import { roboto } from "@/assets/fonts/fonts";
import OracleImage from "../../assets/images/home/oracle.png";
import Image from "next/image";

export default function dashboard() {
  return (
    <DashboardLayout>
      <div className={roboto.variable}>
        <Image src={OracleImage} width={100} height={50} alt="Oracle" />
        <div id={styles.dashboard1}>dashboard</div>
      </div>
    </DashboardLayout>
  );
}
