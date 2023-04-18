import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Grid,
  Card,
  Modal,
  Typography,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { ProgressBar } from "./ProgressBar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface ModalProps {
  onClose: () => void;
  open: boolean;
}

const deposits = [
  {
    title: "1st deposit",
    difference: 31,
    bonusAmountFirst: 700,
    bonusAmountSecnd: 1000.0,
    bgColor: "linear-gradient(171.43deg, #924FE7 6.25%, #6725BB 95.35%)",
  },
  {
    title: "2nd deposit",
    difference: 0,
    bonusAmountFirst: 0.0,
    bonusAmountSecnd: 4100.0,
    bgColor: " linear-gradient(171.43deg, #5681EE 6.25%, #163993 95.35%)",
  },
  {
    title: "3rd deposit",
    difference: 0,
    bonusAmountFirst: 0.0,
    bonusAmountSecnd: 0.0,
    bgColor: "linear-gradient(169.49deg, #1DC57C -3.51%, #145934 94.56%)",
  },
  {
    title: "4th deposit",
    difference: 0,
    bonusAmountFirst: 0.0,
    bonusAmountSecnd: 0.0,
    bgColor: "linear-gradient(351.88deg, #AA0508 3.93%, #F33A3D 92.07%)",
  },
];

export const DepositBonusModal = ({ onClose, open }: ModalProps) => {
  const [showDeposits, setShowDeposits] = useState(true);
  const style = {
    width: 594,
    background: "#151617",
    ...(!showDeposits ? { pt: 5 } : { py: 5 }),
    maxHeight: 828,
    "&:focus-visible": {
      outline: "none",
    },
    mt: { xs: 0, md: 4 },
    position: "relative",
  };

  const handleModalClose = (
    event: React.MouseEvent<HTMLDivElement>,
    reason: string
  ) => {
    if (reason && reason == "backdropClick") return;
    onClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "flex-start" },
          m: { xs: 5, md: 1 },
          overflow: "auto",
        }}
      >
        <Card sx={style}>
          <Grid
            item
            sx={{ cursor: "pointer", position: "absolute", top: 48, right: 40 }}
            onClick={onClose}
          >
            <CloseIcon
              sx={{ color: "#B9B9B9", fontSize: "2rem", ml: "auto" }}
            />
          </Grid>
          {showDeposits && (
            <>
              <Grid item px={5.75}>
                <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
                  Deposit Bonus
                </Typography>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 1.75,
                    mb: 5,
                    cursor: "pointer",
                  }}
                  onClick={() => setShowDeposits(false)}
                >
                  <Typography variant="subtitle1" color="#41E8C2">
                    Details
                  </Typography>
                  <ChevronRightIcon sx={{ color: "#41E8C2" }} />
                </Grid>
              </Grid>
              <Grid item container spacing={2.5} xs={12} px={5.75}>
                {deposits.map((deposit) => (
                  <Grid item width={"100%"}>
                    <Card
                      sx={{
                        background: `${deposit.bgColor}`,
                        position: "relative",
                        p: "18px 23px 21px 25px",
                      }}
                    >
                      <Typography variant="h5">{deposit.title}</Typography>
                      <Grid
                        item
                        container
                        alignItems="flex-end"
                        columnSpacing={3.25}
                        flexWrap="nowrap"
                        mt={2.5}
                      >
                        <Grid item>
                          <Grid item container>
                            <Typography
                              variant="h6"
                              fontWeight="normal"
                              color="#FFFFFF"
                            >
                              Bonus amount:
                            </Typography>
                            <Typography
                              variant="h6"
                              color="#F3BA2F"
                              marginLeft="3px"
                            >
                              ${deposit.bonusAmountFirst} / $
                              {deposit.bonusAmountSecnd}
                            </Typography>
                          </Grid>
                          <Grid>
                            <ProgressBar difference={deposit.difference} />
                          </Grid>
                        </Grid>
                        <Grid item ml="auto">
                          <Button
                            sx={{
                              background: "#440298",
                              color: "#fff",
                              py: 1,
                              px: 2.8,
                              borderRadius: "10px",
                              fontWeight: "bold",
                              fontSize: "16px",
                              fontFamily: "Poppins",
                            }}
                          >
                            Claim
                          </Button>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
          {!showDeposits && (
            <Grid item xs={12}>
              <Grid
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: -1.5,
                  mb: 5,
                  cursor: "pointer",
                  px: 5.75,
                }}
              >
                <KeyboardArrowLeftIcon
                  sx={{ color: "#B9B9B9", fontSize: "2.5rem" }}
                />
                <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
                  Deposit Bonus
                </Typography>
              </Grid>
              <Grid
                px={5.75}
                height="70vh"
                overflow="auto"
                sx={{
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-track": {
                    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#616161",
                    borderRadius: "3px",
                  },
                }}
              >
                <List>
                  <ListItem>
                    <Typography variant="subtitle2">
                      Up to 270% Guaranteed Welcome Bonus With Your First 4
                      Deposits | No Betting Limits, Wagering with deposit Funds!
                    </Typography>
                  </ListItem>
                </List>
                <List
                  sx={[
                    {
                      "& .MuiListItem-root": {
                        display: "list-item",
                        py: 0,
                        color: "#fff",
                        pl: 0,
                        fontFamily: "Poppins",
                      },
                      pl: 6.25,
                    },
                    { listStyle: "disc", mb: 3.5 },
                  ]}
                >
                  <ListItem>
                    1st deposit max. $900 up to 200% real money bonus
                  </ListItem>
                  <ListItem>
                    2nd deposit max. $2.100 up to 210%real money bonus
                  </ListItem>
                  <ListItem>
                    3rd deposit max. $4.300 up to 220% real money bonus
                  </ListItem>
                  <ListItem>
                    4th deposit max. $7.700 up to 270% real money bonus
                  </ListItem>
                </List>
                <Typography mb={3.5}>
                  The Bonus money is guaranteed to be transferred as real money
                  after the wagering requirement is met. Deposit $30 or more for
                  each stage to claim.
                </Typography>
                <Typography mb={3.5}>
                  Wagering with deposit funds only, multiple deposits are
                  allowed. No bet limits. Bonus percentage and max. deposit
                  amount increases after each of the first 4 deposits, max.
                  $15.000.
                </Typography>
                <Typography mb={3.5}>
                  The sum of the first 4 deposits is the base for the total
                  welcome bonus amount. Wager the sum to receive the accrued
                  bonus in cash with no extra conditions attached. Unlimited
                  cash deposits are allowed to complete the wagering
                  requirement.
                </Typography>
                <Typography mb={6.5}>
                  The deposit balance and any winnings from your deposits can be
                  withdrawn at any time after your deposits have been wagered at
                  least once (wager x1). Bonus stays active even once a
                  withdrawal is submitted. No expiry on the bonus funds, every
                  deposit and gameplay will contribute to the wagering until it
                  is completed, even after the 4th deposit!
                </Typography>
                
              </Grid>
              <Grid item mt={-5} onClick={onClose}>
                <Button
                  sx={{
                    background: "#F3302A",
                    color: "#fff",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    py: 1.5,
                    width: "100%",
                    "&:hover": {
                      background: "#fff",
                      color: "#F3302A",
                    },
                  }}
                >
                  Deposit
                </Button>
              </Grid>
            </Grid>
          )}
        </Card>
      </Modal>
    </div>
  );
};
