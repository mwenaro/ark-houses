import { createRecord, getRecords } from "./mongoseCrud";

export const handleSeeding = async (table: string, seedingData: any) => {
    try {
      let fetchedData = await getRecords(table);
      if (!Array.isArray(fetchedData) || fetchedData.length <= 0) {
        await createRecord(table, seedingData);
      }
      return true;
    } catch (error: any) {
      console.log({ error: error.message });
      throw new Error(error.message);
    }
  };