export const getEnvironmentVariable = (environmentVariable: any): string => {
  if (!environmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${
        Object.keys(environmentVariable)[0]
      }`
    );
  } else {
    return environmentVariable;
  }
};

export const config = {
  apiUrl: getEnvironmentVariable(process.env.NEXT_PUBLIC_API_URL),
};
