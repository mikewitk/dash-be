import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private repo: Repository<Product>) {}

  create(createProductDto: CreateProductDto) {
    const { price, image_url, title } = createProductDto;
    const product = this.repo.create({
      price,
      title,
      image_url,
    });
    return this.repo.save(product);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    const product = this.repo.findOne({ where: { id } });

    if (!product) {
      throw new Error('product not found');
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);

    if (!product) {
      throw new Error('product not found');
    }

    Object.assign(product, updateProductDto);

    return this.repo.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);

    if (!product) {
      throw new Error('product not found');
    }

    return this.repo.remove(product);
  }
}
