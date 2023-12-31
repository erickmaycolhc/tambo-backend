import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { TiendaService } from './tienda.service';
import { Tiendas } from './entities/tienda.entity';
import { TiendaDto } from './dto/tienda.modul';
import { TiendaMap } from './dto/tiendaMap';
import { RutasService } from '../rutas/rutas.service';

@Controller('tiendas')
export class TiendaController {
  private readonly logger = new Logger('TiendasController');

  constructor(private readonly tiendaService: TiendaService) {}

  // @Get()
  // findAll(): Promise<TiendaDto[]> {
  //   Logger.log('pruebas', 'TiendasController');
  //   return this.tiendaService.findAll();
  // }

  @Get()
  findAllDTO(): Promise<TiendaMap[]> {
    Logger.log('pruebas', 'TiendasController');
    return this.tiendaService.findAllDTO();
  }

  @Get('rutas')
  findAllTiendas_Ruta() {
    return this.tiendaService.findAllTiendas_Ruta();
  }
  // findAllTiendas_Ruta(): Promise<TiendaMap[]> {
  //   Logger.log('pruebas', 'TiendasController');
  //   return this.tiendaService.findAllTiendas_Ruta();
  // }

  @Post()
  create(@Body() userDto: TiendaDto[]) {
    return this.tiendaService.create(userDto);
  }
}
