export class Created {
  private id: number;

  constructor(public country: string, public date: string, public ownerId: number) {}

  setId(newId: number) {
    this.id = newId;
  }

  getId() {
    return this.id;
  }
}
