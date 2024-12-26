import { Injectable, NestMiddleware } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  private model: any;

  constructor(model: any) {
    this.model = model;
  }

  async use(req: any, res: any, next: () => void) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results: any = {};

    if (endIndex < (await this.model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      results.results = await this.model
        .find()
        .limit(limit)
        .skip(startIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
