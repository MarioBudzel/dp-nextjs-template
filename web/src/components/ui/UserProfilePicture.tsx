import { getBaseURL } from "@/lib/utils";

const UserProfilePicture: React.FC<{
  imageUrl: string | undefined;
  size?: "default" | "small";
  uploader?: boolean;
  onFileUploaded?: (files: FileList | null) => void;
}> = ({ imageUrl, size = "default", uploader, onFileUploaded }) => {
  const uniqueId = `file-uploader-profile-${Math.random()
    .toString(36)
    .substring(2, 9)}`;

  return (
    <div
      className={`${
        size === "small" ? "w-[50px] p-[5px]" : "w-[150px] p-1"
      } aspect-square border border-dashed border-gray-400 rounded-full`}
    >
      <label
        htmlFor={uploader ? uniqueId : ""}
        className="block min-w-0 min-h-0 w-full h-full cursor-pointer aspect-square rounded-full bg-gray-400 bg-center bg-cover bg-no-repeat transition-colors duration-120 hover:bg-text-disabled"
        style={{
          backgroundImage: imageUrl
            ? `url("${imageUrl}")`
            : 'url("data:image/svg+xml, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide%20lucide-image-off%22%3E%3Cline%20x1%3D%222%22%20x2%3D%2222%22%20y1%3D%222%22%20y2%3D%2222%22%2F%3E%3Cpath%20d%3D%22M10.41%2010.41a2%202%200%201%201-2.83-2.83%22%2F%3E%3Cline%20x1%3D%2213.5%22%20x2%3D%226%22%20y1%3D%2213.5%22%20y2%3D%2221%22%2F%3E%3Cline%20x1%3D%2218%22%20x2%3D%2221%22%20y1%3D%2212%22%20y2%3D%2215%22%2F%3E%3Cpath%20d%3D%22M3.59%203.59A1.99%201.99%200%200%200%203%205v14a2%202%200%200%200%202%202h14c.55%200%201.052-.22%201.41-.59%22%2F%3E%3Cpath%20d%3D%22M21%2015V5a2%202%200%200%200-2-2H9%22%2F%3E%3C%2Fsvg%3E")',
          ...(!imageUrl
            ? {
                backgroundRepeat: "no-repeat",
                backgroundSize: size === "small" ? "15px 15px" : "50px 50px",
                backgroundPosition: "center",
              }
            : {}),
        }}
      />

      <input
        id={uniqueId}
        hidden
        type="file"
        accept=".jpg, .png, .gif, .jpeg"
        onChange={(event) => onFileUploaded?.(event.target.files)}
      />
    </div>
  );
};

export default UserProfilePicture;
