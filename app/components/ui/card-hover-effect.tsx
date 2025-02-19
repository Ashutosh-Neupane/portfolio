import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    role: string | string[];
    logo: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-5 py-10",
        className
      )}
    >
      {items.map((item) => (
        <div key={item?.logo} className="block p-2 h-full w-full">
          <Card>
            <div className="flex flex-col items-start">
              <CardLogo logo={item.logo} />
              <CardTitleAndRole title={item.name} role={item.role} />
            </div>
            {/* Only show description if role is an array */}
            {Array.isArray(item.role) && (
              <CardDescription>{item.role.join(", ")}</CardDescription>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-transparent relative z-20 flex flex-col",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardLogo = ({ logo }: { logo: string }) => {
  return (
    <div className="flex justify-start mb-4">
      <img
        src={logo} // Assuming logo is an image URL
        alt="Logo"
        className="h-24 w-24"
      />
    </div>
  );
};

export const CardTitleAndRole = ({
  title,
  role,
}: {
  title: string;
  role: string | string[];
}) => {
  return (
    <div className="flex flex-col relative pl-2">
      {/* Left border line with gray-300 and 0.2rem thickness */}
      <div className="absolute top-[-0.2rem] left-0 h-[calc(100%+0.4rem)] w-[0.2rem] bg-gray-300" />

      <h4 className="text-[#f9fe8f] font-bold tracking-wide text-left z-10">
        {title}
      </h4>

      {Array.isArray(role) ? (
        <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm text-left z-10">
          {role.join(", ")}
        </p>
      ) : (
        <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm text-left z-10">
          {role}
        </p>
      )}
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm text-left",
        className
      )}
    >
      {children}
    </p>
  );
};
