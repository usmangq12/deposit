import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props: { value: number }) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={[
            {
              "& .MuiLinearProgress-barColorPrimary": {
                background: "#F3BA2F",
              },
            },
            {
              background: "rgba(0, 0, 0, 0.2)",
              height: "13px",
              borderRadius: "10px",
            },
          ]}
          variant="determinate"
          {...props}
        />
      </Box>
      <Box sx={{ position: "absolute" }}>
        <Typography
          variant="body2"
          sx={{
            color: "#fff",
            fontSize: "9px",
          }}
        >{`${props.value}.00%`}</Typography>
      </Box>
    </Box>
  );
}

export function ProgressBar({ difference }: { difference: number }) {
  return (
    <Box>
      <LinearProgressWithLabel value={Number(difference)} />
    </Box>
  );
}
