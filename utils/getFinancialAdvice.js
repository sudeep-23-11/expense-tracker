const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const response = await fetch("/api/getFinancialAdvice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalBudget, totalIncome, totalSpend }),
    });

    if (!response.ok) throw new Error("Failed to fetch financial advice");

    const data = await response.json();
    return data.advice || "No advice available.";
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Sorry, something went wrong.";
  }
};

export default getFinancialAdvice;
