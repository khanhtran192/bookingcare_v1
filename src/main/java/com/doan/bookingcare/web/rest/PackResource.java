package com.doan.bookingcare.web.rest;

import com.doan.bookingcare.repository.PackRepository;
import com.doan.bookingcare.service.PackService;
import com.doan.bookingcare.service.dto.PackDTO;
import com.doan.bookingcare.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.doan.bookingcare.domain.Pack}.
 */
@RestController
@RequestMapping("/api")
public class PackResource {

    private final Logger log = LoggerFactory.getLogger(PackResource.class);

    private static final String ENTITY_NAME = "pack";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PackService packService;

    private final PackRepository packRepository;

    public PackResource(PackService packService, PackRepository packRepository) {
        this.packService = packService;
        this.packRepository = packRepository;
    }

    /**
     * {@code POST  /packs} : Create a new pack.
     *
     * @param packDTO the packDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new packDTO, or with status {@code 400 (Bad Request)} if the pack has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/packs")
    public ResponseEntity<PackDTO> createPack(@RequestBody PackDTO packDTO) throws URISyntaxException {
        log.debug("REST request to save Pack : {}", packDTO);
        if (packDTO.getId() != null) {
            throw new BadRequestAlertException("A new pack cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PackDTO result = packService.save(packDTO);
        return ResponseEntity
            .created(new URI("/api/packs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /packs/:id} : Updates an existing pack.
     *
     * @param id the id of the packDTO to save.
     * @param packDTO the packDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated packDTO,
     * or with status {@code 400 (Bad Request)} if the packDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the packDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/packs/{id}")
    public ResponseEntity<PackDTO> updatePack(@PathVariable(value = "id", required = false) final Long id, @RequestBody PackDTO packDTO)
        throws URISyntaxException {
        log.debug("REST request to update Pack : {}, {}", id, packDTO);
        if (packDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, packDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!packRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        PackDTO result = packService.update(packDTO);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, packDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /packs/:id} : Partial updates given fields of an existing pack, field will ignore if it is null
     *
     * @param id the id of the packDTO to save.
     * @param packDTO the packDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated packDTO,
     * or with status {@code 400 (Bad Request)} if the packDTO is not valid,
     * or with status {@code 404 (Not Found)} if the packDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the packDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/packs/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<PackDTO> partialUpdatePack(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody PackDTO packDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update Pack partially : {}, {}", id, packDTO);
        if (packDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, packDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!packRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<PackDTO> result = packService.partialUpdate(packDTO);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, packDTO.getId().toString())
        );
    }

    /**
     * {@code GET  /packs} : get all the packs.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of packs in body.
     */
    @GetMapping("/packs")
    public ResponseEntity<List<PackDTO>> getAllPacks(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of Packs");
        Page<PackDTO> page = packService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /packs/:id} : get the "id" pack.
     *
     * @param id the id of the packDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the packDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/packs/{id}")
    public ResponseEntity<PackDTO> getPack(@PathVariable Long id) {
        log.debug("REST request to get Pack : {}", id);
        Optional<PackDTO> packDTO = packService.findOne(id);
        return ResponseUtil.wrapOrNotFound(packDTO);
    }

    /**
     * {@code DELETE  /packs/:id} : delete the "id" pack.
     *
     * @param id the id of the packDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/packs/{id}")
    public ResponseEntity<Void> deletePack(@PathVariable Long id) {
        log.debug("REST request to delete Pack : {}", id);
        packService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
