import { Created } from "../entities/created";

export class CreatedRepository {
  private list: Created[] = [];
  private counter = 0;

  create(...created: Created[]) {
    for (let create of created) {
      if (this.isExist(create.country)) {
        throw new Error(`❌ Already brought from ${create.country}`);
      }

      create.setId(++this.counter);
      this.list.push(create);
    }
  }

  isExist(country: string) {
    for (let create of this.list) {
      if (create.country === country) return true;
    }

    return false;
  }

  getList() {
    return this.list;
  }
}
