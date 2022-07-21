import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { useTranslation } from "react-i18next";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "other"])),
    },
  };
};

export default function Home() {
  const { t } = useTranslation();
  return <div>{t("common:title")}</div>;
}
