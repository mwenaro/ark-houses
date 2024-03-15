import {
  writeFile,
  mkdir,
  unlink,
  rename,
  access,
  constants,
} from "fs/promises";
import path from "path";


const uploadFolderPath = path.join(process.cwd(), "public", "uploads");
const tempFolderPath = path.join(process.cwd(), "public", "temp");

// const uploadFolderPath = path.join(BASE_PATH, "uploads");
// const tempFolderPath = path.join(BASE_PATH, "temp");
export const handleFileUpload = async (infile: File | null) => {
  const file: File | null = infile as unknown as File;

  if (!file) {
    throw "Invalid file";
  }

  let { name: originalname } = file,
    extension = path.extname(originalname),
    basename = path
      .basename(originalname, extension)
      .toLowerCase()
      .split(" ")
      .join("_"),
    dateString = new Date().toISOString().replace(/:/g, "-"),
    filename = `${basename}-${dateString}${extension}`;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    // Check if the upload folder exists, and create it if not
    await mkdir(tempFolderPath, { recursive: true });
  } catch (error: any) {
    console.error("Error creating upload folder:", error);
    throw "Error creating upload folder:" + error.message;
  }

  // const filepath = path.join(tempFolderPath, file.name);
  const filepath = path.join(tempFolderPath, filename);
  try {
    // Write the file to the specified path
    await writeFile(filepath, buffer);
    console.log(`Uploaded file saved at: ${filepath}`);
    return { success: true, filename };
  } catch (error: any) {
    console.error("Error saving the file:", error.message);
    throw new Error(error.message);
  }
};

// Delete files from /uploads directory

export async function deleteUploadedFile(filename: string) {
  try {
    await unlink(`${uploadFolderPath}/${filename}`);

    console.log(`Deleted the file under ${filename}`);
  } catch (err: any) {
    console.log("An error occured: ", err.message);
  }
}

export async function moveFilesToUpload(filename: string) {
  const sourcePath = tempFolderPath;
  const destinationPath = uploadFolderPath;

  // Construct the full paths for the source and destination files
  const sourceFile = `${sourcePath}/${filename}`;
  const destinationFile = `${destinationPath}/${filename}`;

  try {
    if (!checkFileOrFolderExists(sourceFile)) return false;
    // Move the file
    await rename(sourceFile, destinationFile);

    console.log("File moved successfully!");
    return true;
  } catch (err) {
    console.error(`Error moving file: ${err}`);
    return false;
  }
}

/**
 *
 * @param targetPath
 * @returns
 */
export async function checkFileOrFolderExists(targetPath: string) {
  try {
    await access(targetPath, constants.F_OK);
    console.log(`File or folder at path '${targetPath}' exists.`);
    return true;
  } catch (err: any) {
    if (err.code === "ENOENT") {
      console.log(`File or folder at path '${targetPath}' does not exist.`);
      return false;
    } else {
      console.error(`Error checking file or folder existence: ${err.message}`);
      throw err;
    }
  }
}
