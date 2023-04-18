import { Card, Grid, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import React from "react";
import Image from "next/image";
import { DepositBonusModal } from "./DepositBonusModal";
import { DespositModal } from "./DespositModal";

export const DepositBonus = () => {
  const [isDepositDetailsOpen, setDepositModalStatus] = React.useState(false);
  const [isDepositOrderOpen, setDepositOrderOpen] = React.useState(false);

  return (
    <Grid container maxWidth="500px">
      <Card sx={{ background: "#1b1a1a", pt: 2.5, px: 2 }}>
        <Grid container item>
          <Grid container item spacing={2}>
            <Grid item xs={6}>
              <Card
                sx={{
                  backgroundImage:
                    "linear-gradient(rgba(59,60,59,.35),rgba(173,15,10,.35))",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pl: 2,
                  py: 1,
                }}
              >
                <Grid item>
                  <Typography variant="h5">Rake</Typography>
                  <Typography variant="h5">Back</Typography>
                </Grid>
                <Grid item sx={{ transform: "scale(1.5)" }}>
                  <Image
                    alt="Rocket Image"
                    height={50}
                    width={50}
                    src="/rocket.svg"
                    priority
                  />
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{
                  backgroundImage:
                    "linear-gradient(rgba(59,60,59,.35),rgba(102,187,106,.35))",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pl: 2,
                  py: 1,
                }}
              >
                <Grid item>
                  <Typography variant="h5">Cash</Typography>
                  <Typography variant="h5">Back</Typography>
                </Grid>
                <Grid item sx={{ transform: "scale(1.5)" }}>
                  <Image
                    alt=""
                    height={50}
                    width={50}
                    src="/assets/images/cash.svg"
                    priority
                  />
                </Grid>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              onClick={() => setDepositModalStatus(true)}
              sx={[
                { "& img": { width: "100%", objectFit: "cover" } },
                { cursor: "pointer" },
              ]}
            >
              <Image
                alt=""
                height={85}
                width={85}
                src="/assets/images/deposit.svg"
              />
            </Grid>
          </Grid>
          <Grid item>
            <List>
              <ListItem sx={{ my: 1 }}>
                <FavoriteIcon sx={{ color: "#fff" }} />
                <Typography variant="h6" sx={{ ml: 1, color: "#8E8E8E" }}>
                  Favourites
                </Typography>
              </ListItem>
              <ListItem sx={{ my: 1 }}>
                <HistoryIcon sx={{ color: "#fff" }} />
                <Typography variant="h6" sx={{ ml: 1, color: "#8E8E8E" }}>
                  Recent
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Card>
      <DepositBonusModal
        onClose={() => {
          setDepositModalStatus(false);
          setDepositOrderOpen(true);
        }}
        open={isDepositDetailsOpen}
        key={`${isDepositDetailsOpen}`}
      />
      <DespositModal
        open={isDepositOrderOpen}
        onClose={() => setDepositOrderOpen(false)}
      />
    </Grid>
  );
};
