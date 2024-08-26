import React from "react";
import { Grid } from "@mui/material";
import { montserrat } from "@/assets/fonts/fonts";
import WhatWeDoComp1 from "@/components/WhatWeDoComponents/WhatWeDoComp1";
import WhatWeDoComp2 from "@/components/WhatWeDoComponents/WhatWeDoComp2";
import WhatWeDoComp3 from "@/components/WhatWeDoComponents/WhatWeDoComp3";
import WhatWeDoComp4 from "@/components/WhatWeDoComponents/WhatWeDoComp4";

export default function index() {
  return (
    <Grid container className={`${montserrat.variable}`}>
      <WhatWeDoComp1 />
      <WhatWeDoComp2 />
      <WhatWeDoComp3 />
      <WhatWeDoComp4 />
    </Grid>
  );
}
