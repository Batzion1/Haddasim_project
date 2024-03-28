



export const validateTanzanianID = (value: string) => {
    // Regular expression to match Tanzanian ID card format (10 digits)
    return /^[0-9]{10}$/.test(value);
  };
  