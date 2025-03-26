import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { data } from "@/lib/mockData";
import { Pointer } from "@/components/magicui/pointer";

export default function Frames() {
  return (
    <div className="min-h-full flex justify-center mt-20 w-full">
      <section
        id="frames"
        className="min-h-[50vh] py-8 z-10 w-full flex justify-center scroll-smooth"
      >
        <div className="max-w-4xl w-full">
          <Pointer className="fill-[#8A63D2]" />
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground w-10">
                        {item.status == "in progress" ? (
                          <span className="text-yellow-600">
                            <span className="w-1 bg-amber-700"></span>
                            {item.status}
                          </span>
                        ) : (
                          <span className="text-green-600">{item.status}</span>
                        )}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
