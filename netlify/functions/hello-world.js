export const handler = async (event, context) => {
  //   console.log("Remaining time: ", context.getRemainingTimeInMillis());
  //   console.log("Function name: ", context.functionName);
  //   console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2));
  //   console.info("EVENT\n" + JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
    }),
  };
};
