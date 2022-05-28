import React from "react";

import { Box, Grid, Skeleton } from "@mui/material";

// ProductSkeletonList.propTypes = {
//   length: PropTypes.number,
// };
// ProductSkeletonList.defaultProps = {
//   length: 6,
// };

function ProductSkeletonList(prop) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(9)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
