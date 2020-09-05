import React from "react";
import { Grid, Box } from "@material-ui/core";
import * as S from "./Header.style";

//Icons
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SearchIcon from "@material-ui/icons/Search";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <Box width="100%" padding="5px 15px" bgcolor="primary.main">
      <Grid container alignItems="center">
        <Grid item md={4} xs={1} sm={2}>
          <Box display="flex" justifyContent="flex-end">
            <QueryBuilderIcon color="secondary" fontSize="default" />
          </Box>
        </Grid>
        <Grid item md={3} xs={9} sm={7}>
          <Box padding="0 15px">
            <S.SearchButton
              variant="outlined"
              color="secondary"
              endIcon={<SearchIcon fontSize="small" />}
              fullWidth
            >
              <Box component="span" fontSize="small">
                Buscar en Espacio de trabajo
              </Box>
            </S.SearchButton>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box display="flex" justifyContent="flex-start">
            <HelpOutlineIcon color="secondary" fontSize="default" />
          </Box>
        </Grid>
        <Grid item md={4} xs={1} sm={2}>
          <Box display="flex" justifyContent="flex-end">
            <Box position="relative">
              <S.Avatar src="/static/images/avatar/1.jpg" variant="square" />
              <Box
                display="flex"
                justifyContent="flex-end"
                position="absolute"
                bottom={-5}
                right={-5}
              >
                <FiberManualRecordIcon htmlColor="#2BAC76" fontSize="small" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
