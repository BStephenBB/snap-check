import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "address" })
export class AddressPipe implements PipeTransform {
  transform(address): string {
    const formatted = `${address.address}, ${address.aptNum.toString()}, ${
      address.city
    }, ${address.state}, ${address.zip.toString()}`;
    return formatted;
  }
}
