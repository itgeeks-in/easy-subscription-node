import {
  Page
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";
import { useContext, useEffect } from 'react';

export default function HomePage() {
  
  const { t } = useTranslation();


  console.log(t("HomePage.title"));
  return (
    <Page narrowWidth>
      
    </Page>
  );
}
