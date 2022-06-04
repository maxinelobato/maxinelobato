import { Box, Tag } from "@chakra-ui/react";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 1800;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 180,
  strokeWidth: 20,
  ShadowRoot: true,
  isSmoothColorTransition: true,
};

const renderTime = (dimension, time) => {
  return (
    <Box className="time-wrapper">
      <Box className="time">{time}</Box>
      <Box>{dimension}</Box>
    </Box>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export function Clock() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <>
      <CountdownCircleTimer
        {...timerProps}
        colors="#000000"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) => (
          <Tag
            fontSize={"large"}
            variant={"solid"}
            colorScheme="blackAlpha"
            style={{ color: "beige" }}
          >
            {renderTime("DIAS", getTimeDays(daysDuration - elapsedTime))}
          </Tag>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#000000"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime }) => (
          <Tag
            fontSize={"large"}
            variant={"solid"}
            colorScheme="blackAlpha"
            style={{ color: "beige" }}
          >
            {renderTime("HORAS", getTimeHours(daySeconds - elapsedTime))}
          </Tag>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#000000"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime }) => (
          <Tag
            fontSize={"large"}
            variant={"solid"}
            colorScheme="blackAlpha"
            style={{ color: "beige" }}
          >
            {renderTime("MINUTOS", getTimeMinutes(hourSeconds - elapsedTime))}
          </Tag>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#000000"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0,
        })}
      >
        {({ elapsedTime }) => (
          <Tag
            fontSize={"large"}
            variant={"solid"}
            colorScheme="blackAlpha"
            style={{ color: "beige" }}
          >
            {renderTime("SEGUNDOS", getTimeSeconds(elapsedTime))}
          </Tag>
        )}
      </CountdownCircleTimer>
    </>
  );
}
