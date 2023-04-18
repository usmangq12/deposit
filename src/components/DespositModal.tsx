import React, { useState } from "react";
import {
  Modal,
  Card,
  Grid,
  Typography,
  Input,
  Box,
  Switch,
  Button,
  FormControl,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";

const style = {
  width: 510,
  background: "#202020",
  maxHeight: 828,
  "&:focus-visible": {
    outline: "none",
  },
  mt: { xs: 0, md: 4 },
  position: "relative",
};

const currencies = ["EUR", "USD", "PKR"];

const bonuses = [
  {
    from: 30,
    percentage: 100,
    isValid(value: string) {
      return Number(value) > 29 && Number(value) < 99;
    },
  },
  {
    from: 100,
    percentage: 150,
    isValid(value: string) {
      return Number(value) > 99 && Number(value) < 899;
    },
  },
  {
    from: 900,
    percentage: 200,
    isValid(value: string) {
      return Number(value) > 899;
    },
  },
];

interface ModalProps {
  onClose: () => void;
  open: boolean;
}

export const DespositModal = ({ onClose, open }: ModalProps) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [bonusToggle, setBonusToggle] = useState(true);
  const handleModalClose = (
    event: React.MouseEvent<HTMLDivElement>,
    reason: string
  ) => {
    if (reason && reason == "backdropClick") return;
    onClose();
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBonusToggle(event.target.checked);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleModalClose}
      closeAfterTransition
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", lg: "center" },
        m: { xs: 5, md: 1 },
      }}
    >
      <Card sx={style}>
        <Grid
          item
          sx={{ cursor: "pointer", position: "absolute", top: 48, right: 40 }}
          onClick={onClose}
        >
          <CloseIcon sx={{ color: "#B9B9B9", fontSize: "2rem", ml: "auto" }} />
        </Grid>
        <Grid item sx={{ px: 5.75, pt: 5 }}>
          <Typography
            variant="h4"
            sx={{ textTransform: "capitalize" }}
            onClick={() => setInputValue("")}
          >
            Select Amount
          </Typography>
          <Typography variant="subtitle1" color="#8E8E8E">
            Next Step: Payment Method
          </Typography>
        </Grid>
        <Card
          sx={{
            background: "#151617",
            borderRadius: "0",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            px: 5.75,
            py: 5,
            mt: 2.5,
          }}
        >
          <Grid item position="relative" display="flex" alignItems="center">
            <Input
              sx={{
                height: "70px",
                borderRadius: "10px",
                border: "2px solid #fff",
                fontSize: "32px",
                color: "#fff",
                width: "100%",
                pl: 2.5,
              }}
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <FormControl
              fullWidth
              sx={[
                {
                  "& .MuiInputBase-root": {
                    borderRadius: "12px",
                    border: "0.5px solid rgba(255, 255, 255, 0.6)",
                    height: "50px",
                  },
                  "& .MuiSvgIcon-root": { color: "#fff" },
                  "& .MuiSelect-select": { color: "#fff" },
                  "& .MuiOutlinedInput-notchedOutline": {
                    display: "none",
                  },
                },
                {
                  position: "absolute",
                  right: "20px",
                  width: "100px",
                  top: "11px",
                },
              ]}
            >
              <Select
                labelId="currency-select-label"
                id="currency-select-id"
                value={selectedCurrency}
                label="Currency"
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                {currencies.map((currency: string) => (
                  <MenuItem value={currency}>{currency}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid container>
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              mb={1.88}
              mt={2.5}
            >
              <Grid item display="flex" gap="12px">
                <Box
                  sx={{
                    width: "35px",
                    height: "21px",
                    borderRadius: "5px",
                    color: "#212121",
                    fontSize: "13px",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    background: "#F3BA2F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  1st
                </Box>
                <Typography variant="h6" fontSize="14px" color="#fff">
                  Deposit
                </Typography>
                <InfoIcon sx={{ fill: "#8E8E8E" }} />
              </Grid>
              <Grid item display="flex" alignItems="center">
                <Typography variant="subtitle1" color="#8E8E8E">
                  Use Bonus
                </Typography>
                <Switch
                  {...label}
                  checked={bonusToggle}
                  onChange={handleSwitchChange}
                  sx={[
                    {
                      "& .MuiSwitch-track": {
                        backgroundColor: "#39D493 !important",
                      },
                      "& .MuiSwitch-thumb": {
                        backgroundColor: "#fff",
                      },
                    },
                  ]}
                />
              </Grid>
            </Grid>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="bonus"
              name="radio-buttons-group"
            >
              <Grid item container spacing={1}>
                {bonuses.map((item) => (
                  <Grid item>
                    <Grid item position="relative">
                      <Card
                        sx={{
                          background: "#2E2E2E",
                          borderRadius: "10px",
                          py: 1.5,
                          pl: 1.5,
                          pr: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          alt=""
                          height={37}
                          width={37}
                          src="/assets/images/gift.png"
                        />
                        <Grid item ml={1.88}>
                          <Typography
                            variant="subtitle1"
                            color="#8E8E8E"
                            fontSize="11px"
                            lineHeight={1}
                          >
                            from ${item.from}
                          </Typography>
                          <Typography
                            variant="h6"
                            color="#F3BA2F"
                            fontSize="18px"
                            lineHeight={1}
                          >
                            {item.percentage}%
                          </Typography>
                          <Typography
                            variant="h6"
                            color="#F3BA2F"
                            fontSize="13px"
                            lineHeight={1}
                          >
                            bonus
                          </Typography>
                        </Grid>
                      </Card>

                      <FormControlLabel
                        checked={bonusToggle && item.isValid(inputValue)}
                        control={<Radio />}
                        label="bonus"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: "100%",
                          height: "100%",
                          m: 0,
                          "& .MuiSvgIcon-root,  .MuiTypography-root": {
                            opacity: 0,
                          },
                          "& .Mui-checked": {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            border: "1px solid #F3BA2F",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
            <Grid item container mt={2.5}>
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
                Deposit Now
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Card>
    </Modal>
  );
};
