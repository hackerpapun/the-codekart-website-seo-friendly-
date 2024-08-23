import React from "react";
import { Grid } from "@mui/material";
import { montserrat } from "@/assets/fonts/fonts";
import WhatWeDoComp1 from "@/components/WhatWeDoComponents/WhatWeDoComp1";
import WhatWeDoComp2 from "@/components/WhatWeDoComponents/WhatWeDoComp2";

export default function index() {
  return (
    <Grid container className={`${montserrat.variable}`}>
      <WhatWeDoComp1 />
      <WhatWeDoComp2 />
    </Grid>
  );
}
