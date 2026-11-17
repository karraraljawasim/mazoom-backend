export const REDIS_KEYS = {
  inventory: {
    available: (inventoryId: string) =>
      `mazoom:inventory:${inventoryId}:available`,
  },
};
