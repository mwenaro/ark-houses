import { dbCon } from "./dbCon";
import {
  ProductModel,
  CategoryModel,
  BannerModel,
  PaymentModel,
  PackageModel,
  UserModel,
  ActivationModel,
  DriverModel,
  StakeHolderModel,
  TruckModel,
  CompanyModel,
  TownModel,
  RouteModel,
  CheckpointModel,
  TripModel,
  NewuserModel,
  StationModel,
  VehicleModel,
} from "./models"; // Import your Mongoose models here

// const { v4: uuidv4 } = require('uuid');

const modelMap: any = {
  products: ProductModel,
  categories: CategoryModel,
  banners: BannerModel,
  payments: PaymentModel,
  packages: PackageModel,
  users: UserModel,
  activation: ActivationModel,
  drivers: DriverModel,
  stakeholder: StakeHolderModel,
  trucks: TruckModel,
  company: CompanyModel,
  towns: TownModel,
  routes: RouteModel,
  checkpoints: CheckpointModel,
  trips: TripModel,
  newuser: NewuserModel,
  stations: StationModel,
  vehicles: VehicleModel,
};

// Create

export async function createRecord(table: string, records: any[] | any) {
  await dbCon();
  let temp_records = null;
  if (table == "routes") {
    let temp = Array.isArray(records) ? [...records] : [records];
  }

  try {
    const model = modelMap[table.toLowerCase()];

    if (!model) {
      throw new Error(`Table ${table} not found`);
    }
    let created = null;
    if (Array.isArray(records)) {
      const newRecords = records.map((record) => new model(record));

      // Use insertMany for batch insertion
      created = await model.insertMany(newRecords);
    } else {
      const newRecord = new model(records);

      // const newRecord = new model({ ...body, id: uuidv4() });
      created = await newRecord.save();
    }

    return { msg: "Records created successfully", created };
  } catch (error: any) {
    console.log(`Error creating records in ${table}:`, error.message);
    throw new Error(`Failed to create records in ${table}`);
  } finally {
    //  closeDbCon()
  }
}

// Read
export async function getRecords(table: string, select: string = "", populate = '') {
  await dbCon();

  try {
    const model = modelMap[table.toLowerCase()];

    if (!model) {
      throw new Error(`Table ${table} not found`);
    }

    const rows = await model.find().select(select??'').populate(populate??'').exec();
    return rows;
  } catch (error: any) {
    console.error(`Error fetching records from ${table}:`, error.message);
    throw new Error(`Failed to fetch records from ${table}`);
  } finally {
    //  closeDbCon()
  }
}

// Read by ID
export async function getRecordById(
  table: string,
  id: string,
  select: string = "",
  populate  = ''
) {
  await dbCon();
  try {
    const model = modelMap[table.toLowerCase()];

    if (!model) {
      throw new Error(`Table ${table} not found`);
    }

    const row = await model.findById(id).select(select).populate(populate).exec();
    return row;
  } catch (error: any) {
    console.error(`Error fetching record from ${table}:`, error.message);
    throw new Error(`Failed to fetch record from ${table}`);
  } finally {
    //  closeDbCon()
  }
}
// Read by ID
export async function getRecordByFields(
  table: string,
  filter: any,
  select: string = ""
) {
  await dbCon();
  try {
    const model = modelMap[table.toLowerCase()];

    if (!model) {
      throw new Error(`Table ${table} not found`);
    }

    const row = await model.find(filter).select(select).exec();
    return row;
  } catch (error: any) {
    console.error(`Error fetching record from ${table}:`, error.message);
    throw new Error(`Failed to fetch record from ${table}`);
  } finally {
    //  closeDbCon()
  }
}

export async function checkIfExists(table: string, field: any) {
  await dbCon();
  try {
    const model = modelMap[table.toLowerCase()];

    if (!model) {
      throw new Error(`Table ${table} not found`);
    }

    const row = await model.find(field);

    if (!row || !row.length) throw new Error("No, not found");
    console.log({ row });
    return true;
  } catch (error: any) {
    console.error(`Error fetching record from ${table}:`, error.message);
    throw new Error(`Failed to fetch record from ${table}`);
  }
}

// Update
export async function updateRecord(table: string, id: string, values: any) {
  await dbCon();
  try {
    const model = modelMap[table.toLowerCase()];

    if (!model) {
      throw new Error(`Table ${table} not found`);
    }

    let updated = await model.updateOne({ _id: id }, values);
    return { msg: "Record updated successfully", updated };
  } catch (error: any) {
    console.error(`Error updating record in ${table}:`, error.message);
    throw new Error(`Failed to update record in ${table}`);
  } finally {
    //  closeDbCon()
  }
}

// Delete
export async function deleteRecord(table: string, id: string) {
  await dbCon();
  try {
    const model = modelMap[table.toLowerCase()];

    if (!model) {
      throw new Error(`Table ${table} not found`);
    }

    await model.deleteOne({ _id: id });
    // return "Record deleted successfully";
    return true;
  } catch (error: any) {
    console.error(`Error deleting record from ${table}:`, error.message);
    throw new Error(`Failed to delete record from ${table}`);
  }
}

// Delete
export async function deleteAll(table: string) {
  await dbCon();
  try {
    const model = modelMap[table.toLowerCase()];

    if (!model) {
      throw new Error(`Table ${table} not found`);
    }

    await model.deleteMany({});
    return "Record deleted successfully";
  } catch (error: any) {
    console.error(`Error deleting record from ${table}:`, error.message);
    throw new Error(`Failed to delete record from ${table}`);
  } finally {
    //  closeDbCon()
  }
}
