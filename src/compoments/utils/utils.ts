export const averageScoreColor = (averageScore: number | string) => {
  const className = 'text-color';

  if (averageScore >= 90) {
    return `${className}  ${className}--blue`;
  } else if (averageScore >= 80 && averageScore <= 89) {
    return `${className}  ${className}--green`;
  } else if (averageScore >= 50 && averageScore <= 79) {
    return `${className}  ${className}--yellow`;
  } else {
    return `${className}  ${className}--red`;
  }
}

export const averageSpeedTextColor = (speed: string) => {
  const className = 'text-color';
  const speedValue = speed.toLowerCase();

  const speedScore = {
    aboveExpected: 'above expected',
    asExpected: 'as expected',
    belowExpected: 'below expected',
  };

  if (speedValue === speedScore.aboveExpected) {
    return `${className}  ${className}--blue`;
  } else if (speedValue === speedScore.asExpected) {
    return `${className}  ${className}--green`;
  } else if (speedValue === speedScore.belowExpected) {
    return `${className}  ${className}--red`;
  } else {
    return '';
  }
};
