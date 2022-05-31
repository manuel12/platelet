import { CircularProgress, Fade, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";

function LoadingSpinner({ progress, tooltip, size, delay }) {
    const [loadingColor, setLoadingColor] = useState("orange");
    const [completed, setCompleted] = useState(true);
    const timeOut = useRef(null);

    useEffect(() => {
        if (Math.round(progress) === 100) {
            setLoadingColor("lightgreen");
            setTimeout(() => setCompleted(true), 2000);
            return;
        } else if (timeOut.current) {
            clearTimeout(timeOut.current);
        }
        if (progress !== null) {
            setCompleted(false);
        }
    }, [progress]);

    if (completed) {
        return null;
    } else {
        return (
            <Fade
                in={!completed}
                style={{
                    //transitionDelay: query === "progress" ? "800ms" : "0ms",
                    transitionDelay: delay,
                }}
                unmountOnExit
            >
                <Tooltip title={tooltip}>
                    <Box sx={{ display: "grid" }}>
                        <CircularProgress
                            size={size}
                            variant="determinate"
                            value={progress}
                            sx={{
                                zIndex: 2,
                                gridColumn: 1,
                                gridRow: 1,
                                color: loadingColor,
                            }}
                        />
                        {Math.round(progress) !== 100 && (
                            <CircularProgress
                                size={size}
                                sx={{
                                    gridColumn: 1,
                                    gridRow: 1,
                                    opacity: 0.5,
                                    zIndex: 1,
                                }}
                            />
                        )}
                    </Box>
                </Tooltip>
            </Fade>
        );
    }
}

LoadingSpinner.propTypes = {
    progress: PropTypes.number.isRequired,
    tooltip: PropTypes.string,
    size: PropTypes.number,
    delay: PropTypes.number,
};

LoadingSpinner.defaultProps = {
    tooltip: "",
    size: 40,
    delay: 0,
};

export default LoadingSpinner;
