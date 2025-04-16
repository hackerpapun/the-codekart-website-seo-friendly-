import DashboardLayout from "@/components/dashboard_nested_layout";
import styles from "../../styles/DashboardStyles/dashboard.module.css";
import { roboto } from "@/assets/fonts/fonts";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import Head from "next/head";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | CodeKart</title>
        <meta
          name="description"
          content="Explore your personalized dashboard and manage your CodeKart services efficiently."
        />
      </Head>
      <div className={roboto.variable}>
        <Image
          src={IMAGES.dashboard.oracleImg}
          width={100}
          height={50}
          alt="Oracle Logo - Dashboard Visual"
        />
        <div id={styles.dashboard1}>dashboard</div>
      </div>
    </DashboardLayout>
  );
}
